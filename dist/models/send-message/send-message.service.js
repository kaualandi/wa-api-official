"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMessageService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let SendMessageService = class SendMessageService {
    constructor(http) {
        this.http = http;
        this.baseUrl = process.env.META_BASE_URL + process.env.META_NUMBER_ID;
        this.config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + process.env.META_ACCESS_TOKEN,
            },
        };
    }
    send(sendMessageDto) {
        const data = Object.assign({ type: 'template', messaging_product: 'whatsapp' }, sendMessageDto);
        data.template.language = {
            code: 'en_US',
        };
        return this.http
            .post(`${this.baseUrl}/messages`, data, this.config)
            .pipe((0, rxjs_1.catchError)((error) => {
            console.log(`${new Date().toLocaleString()} => Error to send message to ${sendMessageDto.to}`);
            throw new common_1.BadRequestException(error.response.data);
        }))
            .pipe((0, rxjs_1.map)((res) => {
            console.log(`${new Date().toLocaleString()} => Success to send message to ${sendMessageDto.to}`);
            return res.data;
        }));
    }
};
SendMessageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], SendMessageService);
exports.SendMessageService = SendMessageService;
//# sourceMappingURL=send-message.service.js.map