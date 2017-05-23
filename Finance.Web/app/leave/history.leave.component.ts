import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LeaveService, AlertService, KeysPipe, currentUserName } from "../_services/index";
import { Leave } from "../_models/index";

@Component({
    moduleId: module.id,
    templateUrl: 'history.leave.component.html'
})

export class HistoryLeaveComponent implements OnInit {
    model: any = {};
    returnUrl: string;
    leaves: Array<Leave> = new Array<Leave>();

    constructor(
        private leaveService: LeaveService,
        private alertService: AlertService,
        private router: Router) { }

    ngOnInit() {
        this.returnUrl = "/home";
        this.get();
    }

    get() {
        this.leaveService.get()
            .subscribe(
            (data: any) => {
                for (var i = 0; i < data.length; i++) {
                    this.leaves[i] = new Leave();
                    this.leaves[i].type = data[i].type;
                    this.leaves[i].actualDuration = data[i].actualDuration;
                    this.leaves[i].status = data[i].status;
                    this.leaves[i].startDate = data[i].startDate;
                    this.leaves[i].endDate = data[i].endDate;
                    this.leaves[i].approver = data[i].approver;
                   // this.leaves[i].backup = data[i].backup;
                    this.leaves[i].issueKey = data[i].issueKey;
                }
            },
            error => {
                error._body = (JSON.parse(error.text())).message;
                this.alertService.error(error);
            });
    }
}
