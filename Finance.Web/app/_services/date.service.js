"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let DateService = class DateService {
    getDate(monthIncrement, fromFirstDay = false) {
        var date = new Date();
        if (monthIncrement >= 12 || monthIncrement <= -12) {
            date.setFullYear(date.getFullYear() + monthIncrement / 12);
            monthIncrement = monthIncrement % 12;
        }
        date.setMonth(date.getMonth() + monthIncrement);
        var dd;
        if (fromFirstDay) {
            dd = 1;
        }
        else {
            dd = date.getDate();
        }
        var mm = date.getMonth() + 1;
        var yy = date.getFullYear();
        return [yy,
            (mm > 9 ? '' : '0') + mm,
            (dd > 9 ? '' : '0') + dd
        ].join('-');
    }
    getD(monthIncrement) {
        var date = new Date();
        if (monthIncrement >= 12 || monthIncrement <= -12) {
            date.setFullYear(date.getFullYear() + monthIncrement / 12);
            monthIncrement = monthIncrement % 12;
        }
        date.setMonth(date.getMonth() + monthIncrement);
        var dd;
        dd = 31;
        var mm = date.getMonth() + 1;
        var yy = date.getFullYear();
        return [yy,
            (mm > 9 ? '' : '0') + mm,
            (dd > 9 ? '' : '0') + dd
        ].join('-');
    }
};
DateService = __decorate([
    core_1.Injectable()
], DateService);
exports.DateService = DateService;
//# sourceMappingURL=date.service.js.map