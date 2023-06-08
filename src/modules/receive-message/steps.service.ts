import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { SelectType, Step, Template, Validation } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { MessageDataValue } from './../../models/receive-message/receive-message.interface';
import { firstValueFrom, map } from 'rxjs';

type StepType = Step & {
  validations: Validation[];
  template: Template;
  select_types: SelectType[];
};

@Injectable()
export class StepsService {
  constructor(
    private readonly prismaService: PrismaService,
    private http: HttpService,
  ) {}

  private validationsTypes = {
    API: this.validateApi,
    REGEX_TEST: this.validateRegexTest,
    REGEX_REPLACE: this.validateRegexReplace,
    MIN: this.validateMin,
    MAX: this.validateMax,
    MIN_LENGTH: this.validateMinLength,
    MAX_LENGTH: this.validateMaxLength,
    MEDIA_TYPE: '',
  };

  step = {} as StepType;
  messageDataValue = {} as MessageDataValue;

  async validate(step: StepType, messageDataValue: MessageDataValue) {
    this.step = step;
    this.messageDataValue = messageDataValue;

    const { validations } = step;

    const validationsResult = await Promise.all(
      validations.map(async (validation) => {
        const { type } = validation;

        const validationFunction = this.validationsTypes[type];

        if (validationFunction) {
          return await validationFunction(validation);
        }
      }),
    );

    return validationsResult.every((result) => result);
  }

  private validateMaxLength(validation: Validation) {
    const { value } = validation;
    const { text } = this.messageDataValue.messages[0];

    return text.body.length <= parseInt(value);
  }

  private validateMinLength(validation: Validation) {
    const { value } = validation;
    const { text } = this.messageDataValue.messages[0];

    return text.body.length >= parseInt(value);
  }

  private validateMax(validation: Validation) {
    const { value } = validation;
    const { text } = this.messageDataValue.messages[0];

    return parseInt(text.body) <= parseInt(value);
  }

  private validateMin(validation: Validation) {
    const { value } = validation;
    const { text } = this.messageDataValue.messages[0];

    return parseInt(text.body) >= parseInt(value);
  }

  private validateRegexReplace(validation: Validation) {
    const { value } = validation;
    const { text } = this.messageDataValue.messages[0];

    const regex = new RegExp(value);
    const newValue = text.body.replace(regex, '');
    this.messageDataValue.messages[0].text.body = newValue;

    return true;
  }

  private validateRegexTest(validation: Validation) {
    const { value } = validation;
    const { text } = this.messageDataValue.messages[0];

    const regex = new RegExp(value);

    return regex.test(text.body);
  }

  private async validateApi(validation: Validation) {
    const { value } = validation;
    const body = {
      step_id: this.step.id,
      message_data: this.messageDataValue,
    };

    try {
      const response = await firstValueFrom(
        this.http.post(value, body).pipe(map((res) => res.data)),
      );

      if (response?.value) {
        this.messageDataValue.messages[0].text.body = response.value;
      }
      return true;
    } catch (error) {
      console.log('ERROR VALIDATE API', error);
      return false;
    }
  }
}
