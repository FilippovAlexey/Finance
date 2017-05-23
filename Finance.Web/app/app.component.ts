import { Component } from '@angular/core';
import { GlobalService as Global, UserService, AlertService } from "./_services/index";

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {

    constructor(private userService: UserService, private alertService: AlertService) {
        Global.updateIsLoggedIn();
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