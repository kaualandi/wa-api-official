"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMessageModule = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const logger_middleware_1 = require("../../common/middleware/models/logger/logger.middleware");
const send_message_controller_1 = require("./send-message.controller");
const send_message_service_1 = require("./send-message.service");
let SendMessageModule = class SendMessageModule {
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes(send_message_controller_1.SendMessageController);
    }
};
SendMessageModule = __decorate([
    (0, common_1.Module)({
        controllers: [send_message_controller_1.SendMessageController],
        imports: [axios_1.HttpModule],
        providers: [send_message_service_1.SendMessageService],
    })
], SendMessageModule);
exports.SendMessageModule = SendMessageModule;
//# sourceMappingURL=send-message.module.js.map