import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string = "";

    constructor(
       // private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {        
        let successLogout = this.authenticationService.logout();
        this.returnUrl = "/home";

        if (successLogout) {
            successLogout.subscribe(
                () => {
                      },
                error => {
                    this.router.navigate([this.returnUrl]);
                    let details = error.json().error;
                    this.alertService.error(details);
                });
        }

        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';        
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.userName, this.model.password)
            .subscribe(
            () => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                error._body = (JSON.parse(error.text())).error;
                this.alertService.error(error);
                this.loading = false;
            }); 
    }

    toRegister() {
        this.router.navigate(['register']);
    }
}