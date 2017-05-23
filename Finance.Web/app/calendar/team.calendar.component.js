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
let TeamCalendarComponent = class TeamCalendarComponent {
    constructor(calendarService, alertService, dateService) {
        this.calendarService = calendarService;
        this.alertService = alertService;
        this.dateService = dateService;
        this.model = new index_1.TeamCalendarParams();
        this.filter = new index_1.Filter();
        this.leaveTypes = [];
        this.calendar = new index_1.TeamCalendar();
    }
    ngOnInit() {
        this.model.startDate = this.dateService.getDate(0);
        this.model.endDate = this.dateService.getDate(1);
        this.initData();
    }
    initCalendar() {
        if (this.model.startDate <= this.model.endDate) {
            this.initTypes();
            this.calendarService.getCalendar(this.model).subscribe((data) => this.calendar = data, error => this.alertService.error(error));
        }
        else {
            let error = new Error();
            error._body = "Wrong date input, make sure that Start Date is earlier than End Date.";
            this.alertService.error(error);
        }
    }
    initTypes() {
        let leaveTypeOptions = window["leaveTypeOptions"];
        for (var i = 0; i < leaveTypeOptions.length; i++) {
            let type = leaveTypeOptions[i].caption;
            let firstChar = type[0].toLowerCase();
            type = firstChar + type.substring(1, type.length);
            this.leaveTypes.push(type);
        }
    }
    initData() {
        this.calendarService.getFilters().subscribe((data) => {
            this.filter.teams = data.teams;
            this.model.team = this.filter.teams[0];
            this.filter.departments = data.departments;
            this.model.department = this.filter.departments[0];
            this.initCalendar();
        }, error => {
            error._body = (JSON.parse(error.text())).message;
            this.alertService.error(error);
        });
    }
};
TeamCalendarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        styleUrls: ['calendar.css'],
        templateUrl: 'team.calendar.component.html'
    }),
    __metadata("design:paramtypes", [index_2.TeamCalendarService,
        index_2.AlertService,
        index_2.DateService])
], TeamCalendarComponent);
exports.TeamCalendarComponent = TeamCalendarComponent;
//# sourceMappingURL=team.calendar.component.js.map