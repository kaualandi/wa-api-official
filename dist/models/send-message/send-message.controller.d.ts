import { SendMessageDto } from './dto/send-message.dto';
import { SendMessageService } from './send-message.service';
export declare class SendMessageController {
    private readonly sendMessageService;
    constructor(sendMessageService: SendMessageService);
    send(sendMessageDto: SendMessageDto): import("rxjs").Observable<any>;
}
