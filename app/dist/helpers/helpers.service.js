"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpersService = void 0;
const common_1 = require("@nestjs/common");
const html_entities_1 = require("html-entities");
const mongoose_1 = require("mongoose");
let HelpersService = class HelpersService {
    safeString(str) {
        try {
            return (0, html_entities_1.encode)(str);
        }
        catch (e) {
            return '';
        }
    }
    toObjectId(str, toString = false) {
        try {
            if (mongoose_1.default.Types.ObjectId.isValid(str)) {
                return toString ? new (mongoose_1.default.Types?.ObjectId)(str) + '' : new mongoose_1.default.Types.ObjectId(str);
            }
            else {
                return '';
            }
        }
        catch (e) {
            return '';
        }
    }
};
exports.HelpersService = HelpersService;
exports.HelpersService = HelpersService = __decorate([
    (0, common_1.Injectable)()
], HelpersService);
//# sourceMappingURL=helpers.service.js.map