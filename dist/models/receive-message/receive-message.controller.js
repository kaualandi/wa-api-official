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
exports.ReceiveMessageController = void 0;
const common_1 = require("@nestjs/common");
const receive_message_dto_1 = require("./dto/receive-message.dto");
const receive_message_service_1 = require("./receive-message.service");
let ReceiveMessageController = class ReceiveMessageController {
    constructor(receiveMessageService) {
        this.receiveMessageService = receiveMessageService;
    }
    receive(receiveMessageDto) {
        return this.receiveMessageService.receive(receiveMessageDto);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [receive_message_dto_1.ReceiveMessageDto]),
    __metadata("design:returntype", void 0)
], ReceiveMessageController.prototype, "receive", null);
ReceiveMessageController = __decorate([
    (0, common_1.Controller)('receive-message'),
    __metadata("design:paramtypes", [receive_message_service_1.ReceiveMessageService])
], ReceiveMessageController);
exports.ReceiveMessageController = ReceiveMessageController;
//# sourceMappingURL=receive-message.controller.js.map