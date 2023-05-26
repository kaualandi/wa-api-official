import { BadRequestException, Injectable } from '@nestjs/common';
import { SendMessageDto } from './dto/send-message.dto';
import { HttpService } from '@nestjs/axios';
import { catchError, map } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class SendMessageService {
  constructor(private http: HttpService) {}

  baseUrl = process.env.META_BASE_URL + process.env.META_NUMBER_ID;
  config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + process.env.META_ACCESS_TOKEN,
    },
  };

  send(sendMessageDto: SendMessageDto) {
    const data = {
      type: 'template',
      messaging_product: 'whatsapp',
      ...sendMessageDto,
    };
    data.template.language = {
      code: 'pt_BR',
    };

    return this.http
      .post(`${this.baseUrl}/messages`, data, this.config)
      .pipe(
        catchError((error: AxiosError) => {
          console.log(
            `${new Date().toLocaleString()} => Error to send message to ${
              sendMessageDto.to
            }`,
          );
          throw new BadRequestException(error.response.data);
        }),
      )
      .pipe(
        map((res) => {
          console.log(
            `${new Date().toLocaleString()} => Success to send message to ${
              sendMessageDto.to
            }`,
          );
          return res.data;
        }),
      );
  }
}
