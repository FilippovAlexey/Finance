import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LeaveService, AlertService, currentUserName } from "../_services/index";
import { KeyValuePair } from '../_models/index'


@Component({
    moduleId: module.id,
    templateUrl: 'add.leave.component.html'
})

export class AddLeaveComponent implements OnInit {
    model: any = {};
    returnUrl: string;
    users: Array<string>;
    confirmedActualDuration: boolean = false;

    constructor(
        private _location: Location,
        private leaveService: LeaveService,
        private alertService: AlertService,
        private router: Router) { }

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
                .subscribe(
                () => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
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
            this.leaveService.getActualDuration(this.model.leaveType,
                this.model.calendarType,
                this.model.startDate,
                this.model.endDate)
                .subscribe(
                (data: number) => {
                    this.alertService.success("Actual duration for your leave is " + data.toString());
                    this.confirmedActualDuration = true;
                },
                error => {
                    error._body = (JSON.parse(error.text())).message;
                    this.alertService.error(error);
                });
        }
    }

    loadUserList() {
        this.leaveService.getUserList().subscribe(
            (data: any) => {
                this.users = data;
                setTimeout(() => { $(".selectpicker")['selectpicker'](); }, 0);
            },
            error => {
                error._body = (JSON.parse(error.text())).message;
                this.alertService.error(error);
            });
    }

    validateDate(): boolean {
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

    error(message: string) {
        let error: any = new Error();
        error._body = message;  
        this.alertService.error(error);
        this.confirmedActualDuration = false;
    }
}