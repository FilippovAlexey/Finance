import { HttpService, HeaderType } from '../_services/index';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { ReportSheetViewModel, FilterValuesViewModel, FilterSelectedValuesViewModel } from "../_models/index";

@Injectable()
export class ReportService {

    constructor(
        private httpService: HttpService) { }



    getReport(): Observable<ReportSheetViewModel> {
        return this.httpService.get('api/Report/GetReport', HeaderType.Json)
            .map((response: Response) => {
                return <ReportSheetViewModel>response.json();
            });
    }

    getFilterData(): Observable<FilterValuesViewModel> {
        return this.httpService.get('api/Report/GetFilterData', HeaderType.Json)
            .map((response: Response) => {
                return <FilterValuesViewModel>response.json();
            });
    }

    getFilteredReport(filters: FilterSelectedValuesViewModel): Observable<ReportSheetViewModel> {
        return this.httpService.post('api/Report/GetFilteredReport', filters, HeaderType.Json)
            .map((response: Response) => {
                return <ReportSheetViewModel>response.json();
            });
    }
}