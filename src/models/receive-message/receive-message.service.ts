import { Injectable } from '@nestjs/common';
import { PrismaService } from './../../modules/prisma/prisma.service';
import { ReceiveMessageDto } from './dto/receive-message.dto';
import { UsersService } from 'src/modules/receive-message/users.service';
import { StepsService } from 'src/modules/receive-message/steps.service';
import { SendMessageService } from '../send-message/send-message.service';

@Injectable()
export class ReceiveMessageService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly usersService: UsersService,
    private readonly stepsService: StepsService,
    private readonly sendMessageService: SendMessageService,
  ) {}

  async receive(receiveMessageDto: ReceiveMessageDto) {
    // ? Extrair mensagem recebida do retorno
    const messageData = receiveMessageDto.entry[0].changes[0];

    // ? Verificar se o destinatário (empresa) está cadastrado no painel
    const checkWaba = await this.usersService.checkWaba(
      messageData.value.metadata,
    );
    if (!checkWaba.status) {
      console.log('CHECK WABA:', checkWaba.message);
      return checkWaba;
    }

    // ? Verificar se o remetente (usuário) está cadastrado no painel
    const panelUserId = checkWaba.data.id;
    const talkUser = await this.usersService.checkUser(
      panelUserId,
      messageData.value.contacts[0],
    );
    console.log('TALK USER:', talkUser);

    // ? Verifica o fluxo do usuário e valida a mensagem
    const step = talkUser.step;
    if (step.validations.length > 0) {
      const validate = await this.stepsService.validate(
        step,
        messageData.value,
      );
      console.log('VALIDATE:', validate);

      // ? Envia mensagem de erro do step caso a validação falhe
      if (!validate) {
        return this.sendMessageService.send({
          to: messageData.value.contacts[0].wa_id,
          template: { name: step.error_template, language: { code: 'pt-br' } },
        });
      }
    }

    // ? Verifica o tipo do step para retornar a mensagem correta
    if (step.type === 'SELECT') {
      const selectOptions = step.select_types[0]?.select_type_options;
      const message = messageData.value.messages[0].text.body;
      const selectOption = selectOptions.find(
        (opt) => opt.identifier === message,
      );
    }
  }
}
