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
exports.DatetimeService = void 0;
const common_1 = require("@nestjs/common");
let DatetimeService = class DatetimeService {
    constructor(moment) {
        this.moment = moment;
        console.log("+++++++++++++++++" + moment);
    }
    getTimeStamp() {
        try {
            this.moment;
        }
        catch (e) {
            return 0;
        }
    }
    toString(format = 'YYYY-MM-DD HH:mm:ss') {
        try {
            return this.moment.tz('Asia/Iran').format(format);
        }
        catch (e) {
            return '';
        }
    }
    toDateTime(dateTime = '') {
        try {
            return (dateTime === '') ? this.moment.tz('Asia/Iran') : this.moment.tz('Asia/Iran');
        }
        catch (e) {
            return null;
        }
    }
};
exports.DatetimeService = DatetimeService;
exports.DatetimeService = DatetimeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('MomentWrapper')),
    __metadata("design:paramtypes", [Object])
], DatetimeService);
//# sourceMappingURL=datetime.service.js.map