import { HttpService, HeaderType } from '../_services/index';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { FinanceProjectViewModel, FinanceUserViewModel} from "../_models/index";

@Injectable()
export class FinanceProjectService {

    constructor(
        private httpService: HttpService) { }



    getAll(): Observable<Array<FinanceProjectViewModel>> {
        return this.httpService.get('api/Project/All', HeaderType.Json)
            .map((response: Response) => {
                return <Array<FinanceProjectViewModel>>response.json();
            });
    }

    create(model: FinanceProjectViewModel):Observable<number> {
        return this.httpService.post('api/Project/Create', model, HeaderType.Json)
            .map((response: Response) => {
                return <number>response.json();
            });
    }

    getById(id: number): Observable<FinanceProjectViewModel> {
        return this.httpService.get('api/Project/GetById/' + id, HeaderType.Json)
            .map((response: Response) => {
                return <FinanceProjectViewModel>response.json();
            });
    }

    getMembers(projectId: number): Observable<Array<FinanceUserViewModel>> {
        return this.httpService.get('api/Project/GetMembers/' + projectId, HeaderType.Json)
            .map((response: Response) => {
                return <Array<FinanceUserViewModel>>response.json();
            });
    }

}