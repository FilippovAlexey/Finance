import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpService, HeaderType } from '../_services/index';
import { TeamCalendar as Calendar, TeamCalendarParams } from "../_models/index";

@Injectable()
export class TeamCalendarService {

    constructor(
        private httpService: HttpService) { }

    getCalendar(params:TeamCalendarParams): Observable<Calendar> {
        let url = "api/TeamCalendar/GetCalendar";
        return this.httpService.post(url, params, HeaderType.Json)
            .map((response: Response) => {
                return <Calendar>response.json();
            });
    }
    getFilters(): Observable<any[]> {
        return this.httpService.get('api/TeamCalendar/GetFilters', HeaderType.Json)
            .map((response: Response) => {
                return response.json();
            });
    }
}