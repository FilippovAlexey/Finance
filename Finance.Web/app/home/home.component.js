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
const index_1 = require("../_models/index");
const index_2 = require("../_services/index");
let HomeComponent = class HomeComponent {
    constructor(userService, alertService) {
        this.userService = userService;
        this.alertService = alertService;
        this.model = new index_1.DashboardTable;
        this.colOptions = {
            chart: {
                type: 'column',
                height: 350
            },
            title: { text: 'Bills' },
            series: [{
                    data: [0],
                    name: 'Main'
                },
                {
                    data: [9924.5],
                    name: 'MoneyBox'
                },
                {
                    data: [50000],
                    name: 'Emergency'
                },
                {
                    data: [3000],
                    name: 'Occupancy'
                },
                {
                    data: [450],
                    name: 'Utilities'
                },
                {
                    data: [625.5],
                    name: 'Staff'
                },
                {
                    data: [9000],
                    name: 'Malcolm Reynolds'
                },
                {
                    data: [7500],
                    name: 'Zoy Washburne'
                },
                {
                    data: [7500],
                    name: 'Hoban Washburne'
                },
                {
                    data: [8000],
                    name: 'Inara Serra'
                },
                {
                    data: [6000],
                    name: 'Jayne Cobb'
                },
                {
                    data: [6000],
                    name: 'Kaylee Frye'
                },
                {
                    data: [4500],
                    name: 'Simon Tam'
                },
                {
                    data: [3000],
                    name: 'River Tam'
                },
                {
                    data: [4500],
                    name: 'Derrial Book'
                }
            ]
        };
        this.pieGroupOptions = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                height: 300,
                width: 300
            },
            title: {
                text: 'Bill Groups'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer'
                }
            },
            series: [
                {
                    data: [
                        {
                            name: 'Default',
                            y: 66354.5
                        },
                        {
                            y: 4075.5,
                            name: 'Office'
                        },
                        {
                            y: 56000,
                            name: 'Employees'
                        }
                    ]
                }
            ]
        };
        this.pieOptions = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                height: 300,
                width: 295
            },
            title: {
                text: 'Employees'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer'
                }
            },
            series: [
                {
                    data: [{
                            y: 9000,
                            name: 'Malcolm Reynolds'
                        },
                        {
                            y: 7500,
                            name: 'Zoy Washburne'
                        },
                        {
                            y: 7500,
                            name: 'Hoban Washburne'
                        },
                        {
                            y: 8000,
                            name: 'Inara Serra'
                        },
                        {
                            y: 6000,
                            name: 'Jayne Cobb'
                        },
                        {
                            y: 6000,
                            name: 'Kaylee Frye'
                        },
                        {
                            y: 4500,
                            name: 'Simon Tam'
                        },
                        {
                            y: 3000,
                            name: 'River Tam'
                        },
                        {
                            y: 4500,
                            name: 'Derrial Book'
                        }
                    ]
                }
            ]
        };
        index_2.GlobalService.initCurrentUser();
    }
    ngOnInit() {
        this.model.futureLeaves = new Array();
        this.model.unapprovedLeaves = new Array();
    }
};
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'home.component.html'
    }),
    __metadata("design:paramtypes", [index_2.UserService,
        index_2.AlertService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map