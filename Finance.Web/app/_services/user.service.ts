import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpService, HeaderType, currentUserName } from '../_services/index';
import { User } from "../_models/index";

@Injectable()
export class UserService {
    constructor(private http: HttpService) {
    }

    get(): Observable<User> {
        return this.http.get('api/User/GetUser', HeaderType.Json)
            .map((response: Response) => {
                return response.json();
            });
    }
    getPlannerDays(plannedDate: Date) {
        return this.http.get('api/User/GetPlannedDays?plannedDate='+ plannedDate, HeaderType.Json)
            .map((response: Response) => {
                return response.json();
            });
    }
    getDashboardTables(): Observable<any> {
        return this.http.get('api/User/GetDashboardTables', HeaderType.Json)
            .map((response: Response) => {
                return response.json();
            });
    }
    getName(): Observable<any> {
        return this.http.get('api/User/GetName', HeaderType.Json)
            .map((response: Response) => {
                return response.json();
            });
    }
}