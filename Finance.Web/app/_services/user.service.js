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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
require("rxjs/add/operator/map");
const index_1 = require("../_services/index");
let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    get() {
        return this.http.get('api/User/GetUser', index_1.HeaderType.Json)
            .map((response) => {
            return response.json();
        });
    }
    getPlannerDays(plannedDate) {
        return this.http.get('api/User/GetPlannedDays?plannedDate=' + plannedDate, index_1.HeaderType.Json)
            .map((response) => {
            return response.json();
        });
    }
    getName() {
        return this.http.get('api/User/GetName', index_1.HeaderType.Json)
            .map((response) => {
            return response.json();
        });
    }
};
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.HttpService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map