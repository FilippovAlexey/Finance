import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, FinanceProjectService } from '../_services/index';
import { FinanceProjectViewModel } from '../_models/index';

@Component({
    moduleId: module.id,
    templateUrl: 'project-crud.component.html'
})

export class ProjectCrudComponent implements OnInit {

    private sub: any;
    private paramId: number = -1;
    isViewMode = false;
    isEditMode = false;
    isCreateMode= false;
    model: FinanceProjectViewModel = new FinanceProjectViewModel();
    loading = false;
    header = "";

    constructor(
        private router: Router,
        private alertService: AlertService,
        private route: ActivatedRoute,
        private fProjectService: FinanceProjectService) { }

    ngOnInit() {

        this.sub = this.route.params.subscribe((params: any) => {
            this.paramId = +params['id'];
        });
        if (!isNaN(this.paramId)) {
            this.viewMode();
            this.header = this.model.name;
        }
        else {
            this.createMode();
        }
    }

    toEditMode() {
        this.header = "Editing";
        this.isEditMode = true;
        this.isViewMode = false;
    }

    save() {
        this.isEditMode = false;
        this.isViewMode = true;
    }

    createMode() {
        this.header = "New Project";
        this.isCreateMode = true;
    }


    viewMode() {
        this.isViewMode = true;
        this.isCreateMode = false;
        this.isEditMode = false;
        this.loadData();
        this.header = this.model.name;
    }

    loadData() {
        this.fProjectService.getById(this.paramId).subscribe(
            (data: FinanceProjectViewModel) =>
                this.model = data,
            error => {
                this.alertService.error(error);
                console.log(error);
            });
    }

    create() {
        this.fProjectService.create(this.model).subscribe(
            (data:number) => {
                this.paramId = data;
                this.viewMode();
            },
            error => this.alertService.error(error));
    }

}