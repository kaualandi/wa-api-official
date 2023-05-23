import { ReceiveMessageDto } from './dto/receive-message.dto';
import { ReceiveMessageService } from './receive-message.service';
export declare class ReceiveMessageController {
    private readonly receiveMessageService;
    constructor(receiveMessageService: ReceiveMessageService);
    receive(receiveMessageDto: ReceiveMessageDto): {
        status: boolean;
    };
    testToken(challenge: string): string;
}
