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
        receiveMessageDto === null || receiveMessageDto === void 0 ? void 0 : receiveMessageDto.entry.forEach((entry) => {
            entry.changes.forEach((messagingItem) => {
                var _a;
                (_a = messagingItem === null || messagingItem === void 0 ? void 0 : messagingItem.value.messages) === null || _a === void 0 ? void 0 : _a.forEach((message) => {
                    console.log('\n\nmessage', message);
                    if (message.type === 'contacts') {
                        message.contacts.forEach((contact) => {
                            console.log('\n\ncontact', contact);
                        });
                    }
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