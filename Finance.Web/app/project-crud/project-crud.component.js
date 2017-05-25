"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const index_1 = require("../_services/index");
const index_2 = require("../_models/index");
let ProjectCrudComponent = class ProjectCrudComponent {
    constructor(router, alertService, route, fProjectService) {
        this.router = router;
        this.alertService = alertService;
        this.route = route;
        this.fProjectService = fProjectService;
        this.paramId = -1;
        this.isViewMode = false;
        this.isEditMode = false;
        this.isCreateMode = false;
        this.model = new index_2.FinanceProjectViewModel();
        this.loading = false;
        this.header = "";
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe((params) => {
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
        this.fProjectService.getById(this.paramId).subscribe((data) => this.model = data, error => {
            this.alertService.error(error);
            console.log(error);
        });
    }
    create() {
        this.fProjectService.create(this.model).subscribe((data) => {
            this.paramId = data;
            this.viewMode();
        }, error => this.alertService.error(error));
    }
};
ProjectCrudComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'project-crud.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        index_1.AlertService,
        router_1.ActivatedRoute,
        index_1.FinanceProjectService])
], ProjectCrudComponent);
exports.ProjectCrudComponent = ProjectCrudComponent;
//# sourceMappingURL=project-crud.component.js.map