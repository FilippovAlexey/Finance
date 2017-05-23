import { Component, OnInit } from '@angular/core';
import { LeaveApprove } from '../_models/index'
import { ApproveService, AlertService, GlobalService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'approve.component.html'
})

export class ApproveComponent implements OnInit {

    model: Array<any> = new Array<any>();

    constructor(
        private approveService: ApproveService,
        private alertService: AlertService,
        private globalService: GlobalService
    ) {
    }


    ngOnInit() {
        this.initApprovePage();
    }

    initApprovePage() {
        this.approveService.getLeaveData().subscribe(
            (data: LeaveApprove[]) => this.model = data,
            error => this.alertService.error(error));
    }

    changeStatus(leaveId: number, status: number) {
        this.approveService.setLeaveStatus(leaveId, status).subscribe((data: any) => {
                this.initApprovePage()
            },
            error => {
                error._body = (JSON.parse(error.text())).message;
                this.alertService.error(error);
            });
    }
}