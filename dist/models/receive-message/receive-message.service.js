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
const fs_1 = require("fs");
let ReceiveMessageService = class ReceiveMessageService {
    receive(receiveMessageDto) {
        console.log('receiveMessageDto', receiveMessageDto);
        receiveMessageDto === null || receiveMessageDto === void 0 ? void 0 : receiveMessageDto.entry.forEach((entry) => {
            entry.changes.forEach((messagingItem) => {
                var _a, _b;
                console.log('messagingItem', messagingItem);
                fs_1.default.writeFileSync(`./${messagingItem.metadata.phone_number_id}.json`, JSON.stringify(messagingItem, null, 2));
                console.log('\n\nmessagingItem.contacts', messagingItem.contacts);
                (_a = messagingItem.contacts) === null || _a === void 0 ? void 0 : _a.forEach((contact) => {
                    console.log('contact', contact);
                });
                console.log('\n\nmessagingItem.messages', messagingItem.messages);
                (_b = messagingItem.messages) === null || _b === void 0 ? void 0 : _b.forEach((message) => {
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