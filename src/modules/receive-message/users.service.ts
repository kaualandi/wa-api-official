import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  DataValueContact,
  MessageDataMetadata,
} from 'src/models/receive-message/receive-message.interface';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  findInclude = {
    step: {
      include: {
        validations: true,
        template: true,
        select_types: {
          include: {
            select_type_options: {
              include: {
                template: true,
              },
            },
          },
        },
      },
    },
  };

  async checkWaba(metadata: MessageDataMetadata) {
    const panelUserData = await this.prismaService.panelUser.findUnique({
      where: {
        wa_number_id: metadata.phone_number_id,
      },
    });

    console.log('PANEL USER DATA in CHECKWABA:', panelUserData);

    if (!panelUserData) {
      return {
        status: false,
        message: 'Essa conta não está cadastrada no painel.',
        data: panelUserData,
      };
    }

    return { status: true, message: undefined, data: panelUserData };
  }

  async registerUser(panelUserId: number, contact: DataValueContact) {
    const panelUserCreated = await this.prismaService.talkUser.create({
      data: {
        name: contact.profile.name,
        phone: contact.wa_id,
        panel_user_id: panelUserId,
        step_id: 0,
      },
      include: this.findInclude,
    });

    return panelUserCreated;
  }

  async checkUser(panelUserId: number, contact: DataValueContact) {
    const talkUsers = await this.prismaService.talkUser.findMany({
      where: {
        panel_user_id: panelUserId,
        phone: contact.wa_id,
      },
      include: this.findInclude,
    });

    if (talkUsers.length === 0) {
      const talkUser = await this.registerUser(panelUserId, contact);
      return talkUser;
    }

    return talkUsers[0];
  }
}
