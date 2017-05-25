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
const index_1 = require("../_services/index");
const index_2 = require("../_models/index");
let HistoryLeaveComponent = class HistoryLeaveComponent {
    constructor(leaveService, alertService, router) {
        this.leaveService = leaveService;
        this.alertService = alertService;
        this.router = router;
        this.model = {};
        this.leaves = new Array();
    }
    ngOnInit() {
        this.returnUrl = "/home";
        this.get();
    }
    get() {
        this.leaveService.get()
            .subscribe((data) => {
            for (var i = 0; i < data.length; i++) {
                this.leaves[i] = new index_2.Leave();
                this.leaves[i].type = data[i].type;
                this.leaves[i].actualDuration = data[i].actualDuration;
                this.leaves[i].status = data[i].status;
                this.leaves[i].startDate = data[i].startDate;
                this.leaves[i].endDate = data[i].endDate;
                this.leaves[i].approver = data[i].approver;
                // this.leaves[i].backup = data[i].backup;
                this.leaves[i].issueKey = data[i].issueKey;
            }
        }, error => {
            error._body = (JSON.parse(error.text())).message;
            this.alertService.error(error);
        });
    }
};
HistoryLeaveComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'history.leave.component.html'
    }),
    __metadata("design:paramtypes", [index_1.LeaveService,
        index_1.AlertService,
        router_1.Router])
], HistoryLeaveComponent);
exports.HistoryLeaveComponent = HistoryLeaveComponent;
//# sourceMappingURL=history.leave.component.js.map