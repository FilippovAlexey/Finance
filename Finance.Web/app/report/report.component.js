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
let ReportComponent = class ReportComponent {
    constructor(reportService, alertService, dateService) {
        this.reportService = reportService;
        this.alertService = alertService;
        this.dateService = dateService;
        this.filterSelected = new index_1.FilterSelectedValuesViewModel();
        this.dataLoading = false;
    }
    ngOnInit() {
        this.loadFilterData();
        this.goroupChart = {
            title: { text: 'Bill Groups report' },
            series: [{
                    name: 'Default',
                    data: [66354, 86354, 86354, 86354, 86354, 86354, 86354, 86354, 86354, 86354, 86354, 86354, 86354, 86354, 86354, 86354, 86354, 86354, 86354, 86354, 86354, 86354, 86354, 86354, 86354, 86354, 86354, 86354, 86354, 86354, 66354.5],
                    allowPointSelect: true
                }, {
                    name: 'Office',
                    data: [2500.5, 2500.5, 2500.5, 2500.5, 2500.5, 2500.5, 2500.5, 2500.5, 2500.5, 2500.5, 2500.5, 2500.5, 2500.5, 2500.5, 2500.5, 2500.5, 2500.5, 2500.5, 2500.5, 2500.5, 2500.5, 2500.5, 2500.5, 2500.5, 2500.5, 2500.5, 2500.5, 2500.5, 2500.5, 2500.5, 4075.5],
                    allowPointSelect: true
                }, {
                    name: 'Employees',
                    data: [38000, 38000, 38000, 38000, 38000, 38000, 38000, 38000, 38000, 38000, 38000, 38000, 38000, 38000, 38000, 38000, 38000, 38000, 38000, 38000, 38000, 38000, 38000, 38000, 38000, 38000, 38000, 38000, 38000, 38000, 56000],
                    allowPointSelect: true
                }],
            xAxis: {
                categories: ['05.01.2017', '05.02.2017', '05.03.2017', '05.04.2017', '05.05.2017', '05.06.2017', '05.07.2017', '05.08.2017', '05.09.2017', '05.10.2017', '05.11.2017', '05.12.2017', '05.13.2017', '05.14.2017', '05.15.2017', '05.16.2017', '05.17.2017', '05.18.2017', '05.19.2017', '05.20.2017', '05.21.2017', '05.22.2017', '05.23.2017', '05.24.2017', '05.25.2017', '05.26.2017', '05.27.2017', '05.28.2017', '05.29.2017', '05.30.2017', '05.31.2017']
            }
        };
        this.billsChart = {
            title: { text: 'Bill Groups report' },
            series: [{
                    data: [0, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 0],
                    name: 'Main'
                },
                {
                    data: [9524.5, 9524.5, 9524.5, 9524.5, 9524.5, 9524.5, 9524.5, 9524.5, 9524.5, 9524.5, 9524.5, 9524.5, 9524.5, 9524.5, 9524.5, 9524.5, 9524.5, 9524.5, 9524.5, 9524.5, 9524.5, 9524.5, 9524.5, 9524.5, 9524.5, 9524.5, 9524.5, 9524.5, 9524.5, 9524.5, 9924.5,],
                    name: 'MoneyBox'
                },
                {
                    data: [50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000],
                    name: 'Emergency'
                },
                {
                    data: [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 3000],
                    name: 'Occupancy'
                },
                {
                    data: [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 450],
                    name: 'Utilities'
                },
                {
                    data: [400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 625.5],
                    name: 'Staff'
                },
                {
                    data: [6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 9000],
                    name: 'Malcolm Reynolds'
                },
                {
                    data: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 7500],
                    name: 'Zoy Washburne'
                },
                {
                    data: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 7500],
                    name: 'Hoban Washburne'
                },
                {
                    data: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 8000],
                    name: 'Inara Serra'
                },
                {
                    data: [4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 6000],
                    name: 'Jayne Cobb'
                },
                {
                    data: [4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 6000],
                    name: 'Kaylee Frye'
                },
                {
                    data: [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 4500],
                    name: 'Simon Tam'
                },
                {
                    data: [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 3000],
                    name: 'River Tam'
                },
                {
                    data: [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 4500],
                    name: 'Derrial Book'
                }
            ],
            xAxis: {
                categories: ['05.01.2017', '05.02.2017', '05.03.2017', '05.04.2017', '05.05.2017', '05.06.2017', '05.07.2017', '05.08.2017', '05.09.2017', '05.10.2017', '05.11.2017', '05.12.2017', '05.13.2017', '05.14.2017', '05.15.2017', '05.16.2017', '05.17.2017', '05.18.2017', '05.19.2017', '05.20.2017', '05.21.2017', '05.22.2017', '05.23.2017', '05.24.2017', '05.25.2017', '05.26.2017', '05.27.2017', '05.28.2017', '05.29.2017', '05.30.2017', '05.31.2017']
            }
        };
    }
    loadFilterData() {
        this.setDateInterval('3mounth');
        this.filterSelected.endDate = this.dateService.getDate(0);
        this.filterSelected.reportInterval = 0;
    }
    setDateInterval(event) {
        switch (event) {
            case '1mounth':
                this.filterSelected.startDate = this.dateService.getDate(-1, true);
                break;
            case '3mounth':
                this.filterSelected.startDate = this.dateService.getDate(-3, true);
                break;
            case '6mounth':
                this.filterSelected.startDate = this.dateService.getDate(-6, true);
                break;
            case '1year':
                this.filterSelected.startDate = this.dateService.getDate(-12, true);
                break;
        }
    }
};
ReportComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        styleUrls: ['report.css'],
        templateUrl: 'report.component.html'
    }),
    __metadata("design:paramtypes", [index_2.ReportService,
        index_2.AlertService,
        index_2.DateService])
], ReportComponent);
exports.ReportComponent = ReportComponent;
//# sourceMappingURL=report.component.js.map