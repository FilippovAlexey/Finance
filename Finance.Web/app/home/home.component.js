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
let HomeComponent = class HomeComponent {
    constructor(userService, alertService) {
        this.userService = userService;
        this.alertService = alertService;
        this.model = new index_1.DashboardTable;
        index_2.GlobalService.initCurrentUser();
    }
    ngOnInit() {
        this.model.futureLeaves = new Array();
        this.model.unapprovedLeaves = new Array();
        this.user = new index_1.User();
        this.initUser();
        this.initDashboardTables();
    }
    initUser() {
        this.userService.get()
            .subscribe((data) => {
            this.user.vacationDays = data.vacationDays;
            this.user.userName = data.userName;
            this.user.sickLeaveDays = data.sickLeaveDays;
        }, error => {
            error._body = (JSON.parse(error.text())).message;
            this.alertService.error(error);
        });
    }
    initPlanner(event) {
        this.userService.getPlannerDays(event.target.value)
            .subscribe((data) => {
            this.vacationPlannerDays = data;
        }, error => {
            error._body = (JSON.parse(error.text())).message;
            this.alertService.error(error);
        });
    }
    initDashboardTables() {
        this.userService.getDashboardTables().subscribe((data) => {
            this.model.futureLeaves = data.futureLeaves;
            this.model.unapprovedLeaves = data.unapprovedLeaves;
        }, error => {
            error._body = (JSON.parse(error.text())).message;
            this.alertService.error(error);
        });
    }
};
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'home.component.html'
    }),
    __metadata("design:paramtypes", [index_2.UserService,
        index_2.AlertService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map