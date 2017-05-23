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
const index_1 = require("../_services/index");
let ApproveComponent = class ApproveComponent {
    constructor(approveService, alertService, globalService) {
        this.approveService = approveService;
        this.alertService = alertService;
        this.globalService = globalService;
        this.model = new Array();
    }
    ngOnInit() {
        this.initApprovePage();
    }
    initApprovePage() {
        this.approveService.getLeaveData().subscribe((data) => this.model = data, error => this.alertService.error(error));
    }
    changeStatus(leaveId, status) {
        this.approveService.setLeaveStatus(leaveId, status).subscribe((data) => {
            this.initApprovePage();
        }, error => {
            error._body = (JSON.parse(error.text())).message;
            this.alertService.error(error);
        });
    }
};
ApproveComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'approve.component.html'
    }),
    __metadata("design:paramtypes", [index_1.ApproveService,
        index_1.AlertService,
        index_1.GlobalService])
], ApproveComponent);
exports.ApproveComponent = ApproveComponent;
//# sourceMappingURL=approve.component.js.map