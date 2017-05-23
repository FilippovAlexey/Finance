import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, RegisterService, AuthenticationService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;
    returnUrl: string = '/home';

    constructor(
        private router: Router,
        private registerService: RegisterService,
        private alertService: AlertService,
        private authenticationService: AuthenticationService) { }

   
    register() {
        this.loading = true;
        this.registerService.register(this.model.userName, this.model.name, this.model.password)
            .subscribe(
            () => {
                this.authenticationService.login(this.model.userName, this.model.password).subscribe(
                    () => {
                        this.router.navigate([this.returnUrl]);
                    });
            },
            error => {
                this.alertService.error(error);
            });
    }
}