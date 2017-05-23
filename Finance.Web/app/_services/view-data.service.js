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
let ViewDataService = class ViewDataService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getUsers(filters) {
        return this.httpService.post('api/ShowData/GetUsers', filters, index_1.HeaderType.Json)
            .map((response) => {
            return response.json();
        });
    }
    getUsersCount(filters) {
        return this.httpService.post('api/ShowData/GetUsersCount', filters, index_1.HeaderType.Json).map((response) => {
            return response.json();
        });
    }
    getFilterData() {
        return this.httpService.get('api/ShowData/GetFilterData', index_1.HeaderType.Json)
            .map((response) => {
            return response.json();
        });
    }
    getProjectsBu(filters) {
        return this.httpService.post('api/ShowData/GetProjectBizUnitMappings', filters, index_1.HeaderType.Json)
            .map((response) => {
            return response.json();
        });
    }
    getProjectBuCount(filters) {
        return this.httpService.post('api/ShowData/GetProjectBuCount', filters, index_1.HeaderType.Json).map((response) => {
            return response.json();
        });
    }
};
ViewDataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.HttpService])
], ViewDataService);
exports.ViewDataService = ViewDataService;
//# sourceMappingURL=view-data.service.js.map