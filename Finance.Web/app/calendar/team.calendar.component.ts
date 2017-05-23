import { Component, OnInit } from '@angular/core';
import { TeamCalendar as Calendar, Filter, TeamCalendarParams } from '../_models/index'
import { TeamCalendarService, AlertService, DateService } from '../_services/index';

@Component({
    moduleId: module.id,
    styleUrls: ['calendar.css'],
    templateUrl: 'team.calendar.component.html'
})

export class TeamCalendarComponent implements OnInit {
    model: TeamCalendarParams = new TeamCalendarParams();
    filter: Filter = new Filter();
    leaveTypes: Array<string> = [];
    calendar: Calendar = new Calendar();
    team: string;
    department: string;
    
    constructor(
        private calendarService: TeamCalendarService,
        private alertService: AlertService,
        private dateService: DateService
    ) { }

    ngOnInit() {
        this.model.startDate = this.dateService.getDate(0); 
        this.model.endDate = this.dateService.getDate(1);     
        this.initData();             
    }

    initCalendar() {
        if (this.model.startDate <= this.model.endDate) {
            this.initTypes();
            this.calendarService.getCalendar(this.model).subscribe(
                (data: Calendar) => this.calendar = data,
                error => this.alertService.error(error));
        } else {
            let error: any = new Error();
            error._body = "Wrong date input, make sure that Start Date is earlier than End Date.";
            this.alertService.error(error);
        }
    }

    initTypes() {
        let leaveTypeOptions = window["leaveTypeOptions"];
        for (var i = 0; i < leaveTypeOptions.length; i++) {
            let type: string = leaveTypeOptions[i].caption;
            let firstChar: string = type[0].toLowerCase();
            type = firstChar + type.substring(1, type.length);
            this.leaveTypes.push(type);
        }
    }
    initData() {
        this.calendarService.getFilters().subscribe((data: any) => {
            this.filter.teams = data.teams;
            this.model.team = this.filter.teams[0];
            this.filter.departments = data.departments;
            this.model.department = this.filter.departments[0];
            this.initCalendar();
        },
            error => {
                error._body = (JSON.parse(error.text())).message;
                this.alertService.error(error);
            });
    }
}