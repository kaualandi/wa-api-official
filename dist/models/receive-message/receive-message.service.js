"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceiveMessageService = void 0;
const common_1 = require("@nestjs/common");
let ReceiveMessageService = class ReceiveMessageService {
    receive(receiveMessageDto) {
        console.log('receiveMessageDto', receiveMessageDto);
        receiveMessageDto === null || receiveMessageDto === void 0 ? void 0 : receiveMessageDto.entry.forEach((entry) => {
            entry.changes.forEach((messagingItem) => {
                var _a, _b, _c, _d;
                console.log('messagingItem', messagingItem);
                console.log('\n\nmessagingItem.contacts', (_a = messagingItem.value) === null || _a === void 0 ? void 0 : _a.contacts);
                (_b = messagingItem === null || messagingItem === void 0 ? void 0 : messagingItem.value.contacts) === null || _b === void 0 ? void 0 : _b.forEach((contact) => {
                    console.log('contact', contact);
                });
                console.log('\n\nmessagingItem.messages', (_c = messagingItem.value) === null || _c === void 0 ? void 0 : _c.messages);
                (_d = messagingItem === null || messagingItem === void 0 ? void 0 : messagingItem.value.messages) === null || _d === void 0 ? void 0 : _d.forEach((message) => {
                    console.log('message', message);
                });
            });
        });
        return { status: true };
    }
};
ReceiveMessageService = __decorate([
    (0, common_1.Injectable)()
], ReceiveMessageService);
exports.ReceiveMessageService = ReceiveMessageService;
//# sourceMappingURL=receive-message.service.js.map