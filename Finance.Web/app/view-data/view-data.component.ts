import { Component, OnInit} from '@angular/core';
import { User, UserFilterParams, UserFilterValuesViewModel, ProjectBu } from '../_models/index'
import { ViewDataService, AlertService } from '../_services/index';
import { Tab, TabControl } from '../tab-control/index';


@Component({
    moduleId: module.id,
    templateUrl: 'view-data.component.html'
})


export class ViewDataComponent implements OnInit {
    userModel: Array<User> = new Array<User>();
    projectBuModel: Array<ProjectBu> = new Array<ProjectBu>();
    usersCount: number;
    projectBuCount: number;
    filterData: UserFilterValuesViewModel = new UserFilterValuesViewModel();
    filter: UserFilterParams = new UserFilterParams();

    constructor(
        private alertService: AlertService,
        private viewDataService: ViewDataService)
    { }

    ngOnInit() {
        this.loadFilterData();
        this.filter.page = 1;
        this.filter.projectBuPage = 1;
        this.getUsersCount();
        this.getProjectBuCount();
        this.getUsers();
        this.getProjectsBu();
    }

    getUsersCount() {
        this.viewDataService.getUsersCount(this.filter).subscribe((data: number) => {
            this.usersCount = data;
        }, error => {
            error._body = (JSON.parse(error.text())).error;
            this.alertService.error(error);
        });
    }

    getProjectBuCount() {
        this.viewDataService.getProjectBuCount(this.filter).subscribe((data: number) => {
            this.projectBuCount = data;
        }, error => {
            error._body = (JSON.parse(error.text())).error;
            this.alertService.error(error);
        });
    }

    getUsers() {
        this.getUsersCount();
        this.viewDataService.getUsers(this.filter).subscribe((data: Array<User>) => {
            this.userModel = data;
        }, error => {
            error._body = (JSON.parse(error.text())).error;
            this.alertService.error(error);
        });
    }

    getNextPage() {
        if (this.usersCount / 20 > this.filter.page) {
            this.filter.page++;
            this.getUsers();
        }
    }

    getPreviousPage() {
        if (this.filter.page > 1) {
            this.filter.page--;
            this.getUsers();
        }
    }

    getNextProjectBuPage() {
        if (this.projectBuCount / 20 > this.filter.projectBuPage) {
            this.filter.projectBuPage++;
            this.getProjectsBu();
        }
    }

    getPreviousProjectBuPage() {
        if (this.filter.projectBuPage > 1) {
            this.filter.projectBuPage--;
            this.getProjectsBu();
        }
    }

    loadFilterData() {
        this.viewDataService.getFilterData().subscribe(
            (data: UserFilterValuesViewModel) => {
                this.filterData = data;
                setTimeout(() => { $(".selectpicker")['selectpicker'](); }, 0);
            },
            error => this.alertService.error(error))
    }

    getProjectsBu() {
        this.getProjectBuCount();
        this.viewDataService.getProjectsBu(this.filter).subscribe((data: Array<ProjectBu>) => {
            this.projectBuModel = data;
        }, error => {
            error._body = (JSON.parse(error.text())).error;
            this.alertService.error(error);
        });
    }
}