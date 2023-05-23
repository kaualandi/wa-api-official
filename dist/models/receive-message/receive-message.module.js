"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceiveMessageModule = void 0;
const common_1 = require("@nestjs/common");
const receive_message_service_1 = require("./receive-message.service");
const receive_message_controller_1 = require("./receive-message.controller");
let ReceiveMessageModule = class ReceiveMessageModule {
};
ReceiveMessageModule = __decorate([
    (0, common_1.Module)({
        controllers: [receive_message_controller_1.ReceiveMessageController],
        providers: [receive_message_service_1.ReceiveMessageService],
    })
], ReceiveMessageModule);
exports.ReceiveMessageModule = ReceiveMessageModule;
//# sourceMappingURL=receive-message.module.js.map