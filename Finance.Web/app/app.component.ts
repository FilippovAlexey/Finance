import { Component, OnInit } from '@angular/core';
import { GlobalService as Global, UserService, AlertService, FinanceProjectService} from "./_services/index";
import {FinanceProjectViewModel} from './_models/index';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit{
    fProjects: Array<FinanceProjectViewModel> = new Array<FinanceProjectViewModel>();

    constructor(private userService: UserService,
        private alertService: AlertService,
        private projectService: FinanceProjectService) {
        Global.updateIsLoggedIn();
    }

    ngOnInit() {
        this.getProjects();
    }

    getProjects() {
        this.projectService.getAll().subscribe(
            (data: Array<FinanceProjectViewModel>) => 
                this.fProjects = data,
                error => this.alertService.error(error));
    }

    get IsLoggedIn() {
        return Global.isLoggedIn;
    }
    userName: string;
    loadingName: boolean = false;
    loadName() {
        if (this.loadingName)
            return;
        this.loadingName = true;
        this.userService.getName().subscribe(
            (data: any) =>this.userName = data,
            error => this.alertService.error(error));
    }
    get UserName() {
        if (this.IsLoggedIn) {
            this.loadName();
            return this.userName;
        } else
            this.loadingName = false;

    }
}