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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMessageController = void 0;
const common_1 = require("@nestjs/common");
const send_message_dto_1 = require("./dto/send-message.dto");
const send_message_service_1 = require("./send-message.service");
let SendMessageController = class SendMessageController {
    constructor(sendMessageService) {
        this.sendMessageService = sendMessageService;
    }
    send(sendMessageDto) {
        return this.sendMessageService.send(sendMessageDto);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.Header)('Cache-Control', 'none'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [send_message_dto_1.SendMessageDto]),
    __metadata("design:returntype", void 0)
], SendMessageController.prototype, "send", null);
SendMessageController = __decorate([
    (0, common_1.Controller)('send-message'),
    __metadata("design:paramtypes", [send_message_service_1.SendMessageService])
], SendMessageController);
exports.SendMessageController = SendMessageController;
//# sourceMappingURL=send-message.controller.js.map