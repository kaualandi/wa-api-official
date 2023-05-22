import { IsNotEmpty } from 'class-validator';
import { TemplateType } from '../send-message.interface';

export class SendMessageDto {
  @IsNotEmpty()
  to: string;

  @IsNotEmpty()
  template: TemplateType;
}
