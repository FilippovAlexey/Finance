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
let LeaveService = class LeaveService {
    constructor(http) {
        this.http = http;
    }
    add(leaveType, calendarType, startDate, endDate, description, approver, backup) {
        let body = "typeId=" + leaveType + "&destinationCalendarTypeId=" + calendarType + "&startDate=" + startDate + "&endDate=" + endDate + "&statusId=1" + "&description=" + description + "&approver=" + approver + "&backup=" + backup;
        return this.http.post('api/Leave/AddLeave', body, index_1.HeaderType.Form);
    }
    getActualDuration(leaveType, calendarType, startDate, endDate) {
        let body = "typeId=" + leaveType + "&destinationCalendarTypeId=" + calendarType + "&startDate=" + startDate + "&endDate=" + endDate;
        return this.http.post('api/Leave/GetActualDuration', body, index_1.HeaderType.Form)
            .map((response) => {
            return response.json();
        });
    }
    get() {
        return this.http.get('api/Leave/GetLeaves', index_1.HeaderType.Json)
            .map((response) => {
            return response.json();
        });
    }
    getUserList() {
        return this.http.get('api/User/GetUserNames', index_1.HeaderType.Json)
            .map((response) => {
            return response.json();
        });
    }
};
LeaveService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.HttpService])
], LeaveService);
exports.LeaveService = LeaveService;
//# sourceMappingURL=leave.service.js.map