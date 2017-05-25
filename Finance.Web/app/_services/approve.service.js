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
const index_1 = require("../_services/index");
const core_1 = require("@angular/core");
require("rxjs/add/operator/map");
let ApproveService = class ApproveService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getLeaveData() {
        return this.httpService.get('api/Leave/GetLeavesToApprove', index_1.HeaderType.Json)
            .map((response) => {
            return response.json();
        });
    }
    setLeaveStatus(id, status) {
        let body = "Id=" + id + "&status=" + status;
        return this.httpService.post('api/Leave/SetLeaveStatus', body, index_1.HeaderType.Form);
    }
};
ApproveService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.HttpService])
], ApproveService);
exports.ApproveService = ApproveService;
//# sourceMappingURL=approve.service.js.map