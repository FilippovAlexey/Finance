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
const index_1 = require("../_models/index");
const index_2 = require("../_services/index");
let ViewDataComponent = class ViewDataComponent {
    constructor(alertService, viewDataService) {
        this.alertService = alertService;
        this.viewDataService = viewDataService;
        this.userModel = new Array();
        this.projectBuModel = new Array();
        this.filterData = new index_1.UserFilterValuesViewModel();
        this.filter = new index_1.UserFilterParams();
    }
    ngOnInit() {
        this.loadFilterData();
        this.filter.page = 1;
        this.filter.projectBuPage = 1;
        this.getUsersCount();
        this.getProjectBuCount();
        this.getUsers();
        this.getProjectsBu();
    }
    getUsersCount() {
        this.viewDataService.getUsersCount(this.filter).subscribe((data) => {
            this.usersCount = data;
        }, error => {
            error._body = (JSON.parse(error.text())).error;
            this.alertService.error(error);
        });
    }
    getProjectBuCount() {
        this.viewDataService.getProjectBuCount(this.filter).subscribe((data) => {
            this.projectBuCount = data;
        }, error => {
            error._body = (JSON.parse(error.text())).error;
            this.alertService.error(error);
        });
    }
    getUsers() {
        this.getUsersCount();
        this.viewDataService.getUsers(this.filter).subscribe((data) => {
            this.userModel = data;
        }, error => {
            error._body = (JSON.parse(error.text())).error;
            this.alertService.error(error);
        });
    }
    getNextPage() {
        if (this.usersCount / 20 > this.filter.page) {
            this.filter.page++;
            this.getUsers();
        }
    }
    getPreviousPage() {
        if (this.filter.page > 1) {
            this.filter.page--;
            this.getUsers();
        }
    }
    getNextProjectBuPage() {
        if (this.projectBuCount / 20 > this.filter.projectBuPage) {
            this.filter.projectBuPage++;
            this.getProjectsBu();
        }
    }
    getPreviousProjectBuPage() {
        if (this.filter.projectBuPage > 1) {
            this.filter.projectBuPage--;
            this.getProjectsBu();
        }
    }
    loadFilterData() {
        this.viewDataService.getFilterData().subscribe((data) => {
            this.filterData = data;
            setTimeout(() => { $(".selectpicker")['selectpicker'](); }, 0);
        }, error => this.alertService.error(error));
    }
    getProjectsBu() {
        this.getProjectBuCount();
        this.viewDataService.getProjectsBu(this.filter).subscribe((data) => {
            this.projectBuModel = data;
        }, error => {
            error._body = (JSON.parse(error.text())).error;
            this.alertService.error(error);
        });
    }
};
ViewDataComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'view-data.component.html'
    }),
    __metadata("design:paramtypes", [index_2.AlertService,
        index_2.ViewDataService])
], ViewDataComponent);
exports.ViewDataComponent = ViewDataComponent;
//# sourceMappingURL=view-data.component.js.map