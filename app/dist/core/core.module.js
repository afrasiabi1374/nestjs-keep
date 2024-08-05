"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreModule = void 0;
const common_1 = require("@nestjs/common");
const datetime_service_1 = require("./datetime/datetime.service");
const moment = require('moment');
console.log('moment in module === ' + moment);
let CoreModule = class CoreModule {
};
exports.CoreModule = CoreModule;
exports.CoreModule = CoreModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [
            datetime_service_1.DatetimeService,
            {
                provide: 'MomentWrapper',
                useValue: moment.tz('Asia/Tehran')
            }
        ],
        exports: [
            datetime_service_1.DatetimeService
        ]
    })
], CoreModule);
//# sourceMappingURL=core.module.js.map