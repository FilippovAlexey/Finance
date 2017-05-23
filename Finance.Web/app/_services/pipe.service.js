"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let KeysPipe = class KeysPipe {
    transform(value, args) {
        let keys = [];
        for (let key in value) {
            var formattedValue = value[key];
            var isNumber = typeof formattedValue == "number";
            if (!isNumber && formattedValue.match(/[a-z]/i)) {
                var numberDate = Date.parse(formattedValue);
                var isDate = !isNaN(numberDate);
                var isDateRegex = this.isDateRegex(formattedValue);
                if (isDate && isDateRegex) {
                    var date = new Date(formattedValue);
                    formattedValue = date.toLocaleDateString();
                }
            }
            keys.push({ key: key, value: formattedValue });
        }
        return keys;
    }
    isDateRegex(val) {
        var datePat = /(201[4-9]|202[0-9])-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])T/;
        var matchArray = val.match(datePat);
        if (matchArray == null) {
            return false;
        }
        else {
            return true;
        }
    }
};
KeysPipe = __decorate([
    core_1.Pipe({ name: 'keys' })
], KeysPipe);
exports.KeysPipe = KeysPipe;
//# sourceMappingURL=pipe.service.js.map