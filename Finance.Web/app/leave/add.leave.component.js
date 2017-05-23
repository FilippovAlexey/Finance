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
const router_1 = require("@angular/router");
const common_1 = require("@angular/common");
const index_1 = require("../_services/index");
let AddLeaveComponent = class AddLeaveComponent {
    constructor(_location, leaveService, alertService, router) {
        this._location = _location;
        this.leaveService = leaveService;
        this.alertService = alertService;
        this.router = router;
        this.model = {};
        this.confirmedActualDuration = false;
    }
    ngOnInit() {
        this.loadUserList();
        this.model.leaveTypeOptions = window["leaveTypeOptions"];
        this.model.calendarTypeOptions = window["calendarTypeOptions"];
        this.model.leaveType = this.model.leaveTypeOptions[0].id;
        this.model.calendarType = this.model.calendarTypeOptions[0].id;
        this.returnUrl = "/viewleaves";
    }
    add() {
        if (this.validateDate()) {
            this.leaveService.add(this.model.leaveType, this.model.calendarType, this.model.startDate, this.model.endDate, this.model.description, this.model.approver, this.model.backup)
                .subscribe(() => {
                this.router.navigate([this.returnUrl]);
            }, error => {
                error._body = (JSON.parse(error.text())).message;
                this.alertService.error(error);
            });
        }
    }
    backClicked() {
        this._location.back();
    }
    showActualDuration() {
        if (this.validateDate()) {
            this.leaveService.getActualDuration(this.model.leaveType, this.model.calendarType, this.model.startDate, this.model.endDate)
                .subscribe((data) => {
                this.alertService.success("Actual duration for your leave is " + data.toString());
                this.confirmedActualDuration = true;
            }, error => {
                error._body = (JSON.parse(error.text())).message;
                this.alertService.error(error);
            });
        }
    }
    loadUserList() {
        this.leaveService.getUserList().subscribe((data) => {
            this.users = data;
            setTimeout(() => { $(".selectpicker")['selectpicker'](); }, 0);
        }, error => {
            error._body = (JSON.parse(error.text())).message;
            this.alertService.error(error);
        });
    }
    validateDate() {
        if (this.model.startDate == undefined || this.model.endDate == undefined) {
            this.error("Wrong input date, make sure that the dates have been selected");
            return false;
        }
        if (this.model.startDate > this.model.endDate) {
            this.error("Wrong input date, make sure that Start Date is earlier than End Date");
            return false;
        }
        return true;
    }
    error(message) {
        let error = new Error();
        error._body = message;
        this.alertService.error(error);
        this.confirmedActualDuration = false;
    }
};
AddLeaveComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'add.leave.component.html'
    }),
    __metadata("design:paramtypes", [common_1.Location,
        index_1.LeaveService,
        index_1.AlertService,
        router_1.Router])
], AddLeaveComponent);
exports.AddLeaveComponent = AddLeaveComponent;
//# sourceMappingURL=add.leave.component.js.map