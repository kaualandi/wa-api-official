import { SendMessageDto } from './dto/send-message.dto';
import { HttpService } from '@nestjs/axios';
export declare class SendMessageService {
    private http;
    constructor(http: HttpService);
    baseUrl: string;
    config: {
        headers: {
            'Content-Type': string;
            Authorization: string;
        };
    };
    send(sendMessageDto: SendMessageDto): import("rxjs").Observable<any>;
}
