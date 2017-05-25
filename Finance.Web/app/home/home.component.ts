import { Component, OnInit } from '@angular/core';
import { User, DashboardTable } from "../_models/index";
import { GlobalService as Global, AlertService, UserService } from '../_services/index';


@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

    temp: number;
    user: User;
    vacationPlannerDays: number;
    model: DashboardTable = new DashboardTable;

    constructor(
        private userService: UserService,
        private alertService: AlertService) {
        Global.initCurrentUser();
    }

    ngOnInit() {
        this.model.futureLeaves = new Array();
        this.model.unapprovedLeaves = new Array();
        this.user = new User();
    }

    initUser() {        
    }
    initPlanner(event: any) {
        this.userService.getPlannerDays(event.target.value)
            .subscribe(
            (data: any) => {
                this.vacationPlannerDays = data;
            },
            error => {
                error._body = (JSON.parse(error.text())).message;
                this.alertService.error(error);
            });
    }
}