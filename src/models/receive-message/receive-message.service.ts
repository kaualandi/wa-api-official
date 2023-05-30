import { Injectable } from '@nestjs/common';
import { PrismaService } from './../../modules/prisma/prisma.service';
import { ReceiveMessageDto } from './dto/receive-message.dto';
import { UsersService } from 'src/modules/receive-message/users.service';

@Injectable()
export class ReceiveMessageService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly usersService: UsersService,
  ) {}

  async receive(receiveMessageDto: ReceiveMessageDto) {
    const messageData = receiveMessageDto.entry[0].changes[0];

    const checkWaba = await this.usersService.checkWaba(
      messageData.value.metadata,
    );

    if (!checkWaba.status) {
      console.log('CHECK WABA:', checkWaba.message);
      return checkWaba;
    }

    return { status: true };
  }
}
