import { HttpService, HeaderType } from '../_services/index';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { User, UserFilterParams, UserFilterValuesViewModel, ProjectBu } from "../_models/index";


@Injectable()
export class ViewDataService {
    constructor(
        private httpService: HttpService) { }

    getUsers(filters: UserFilterParams): Observable<Array<User>> {

        return this.httpService.post('api/ShowData/GetUsers', filters, HeaderType.Json)
            .map((response: Response) => {
                return <Array<User>>response.json();
            })
    }

    getUsersCount(filters: UserFilterParams): Observable<number> {
        return this.httpService.post('api/ShowData/GetUsersCount', filters, HeaderType.Json).map((response: Response) => {
            return response.json();
        });
    }

    getFilterData(): Observable<UserFilterValuesViewModel> {
        return this.httpService.get('api/ShowData/GetFilterData', HeaderType.Json)
            .map((response: Response) => {
                return <UserFilterValuesViewModel>response.json();
            });
    }

    getProjectsBu(filters: UserFilterParams): Observable<Array<ProjectBu>> {

        return this.httpService.post('api/ShowData/GetProjectBizUnitMappings', filters, HeaderType.Json)
            .map((response: Response) => {
                return <Array<ProjectBu>>response.json();
            })
    }

    getProjectBuCount(filters: UserFilterParams): Observable<number> {
        return this.httpService.post('api/ShowData/GetProjectBuCount', filters, HeaderType.Json).map((response: Response) => {
            return response.json();
        });
    }
}