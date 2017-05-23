import { Injectable } from '@angular/core';
import { HttpService, HeaderType } from '../_services/index';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { KeyValuePair } from '../_models/index';

@Injectable()
export class MapDictionaryService {

    constructor(
        private httpService: HttpService) {
    }

    getUnmapped(page: number, itemsPerPage: number, entityType: string): Observable<Array<string>> {
        let body = { page, itemsPerPage, entityType};
        return this.httpService.post('api/MapDictionary/GetNotMapped', body, HeaderType.Json)
            .map((response: Response) => {
                return <Array<string>>response.json();
            });
    }

    getPagesCount(itemsPerPage: number, dictionaryType: string): Observable<number> {
        return this.httpService.get('api/MapDictionary/GetPagesCount' + '?itemsPerPage=' + itemsPerPage + '&dictionaryType=' + dictionaryType, HeaderType.Json)
            .map((response: Response) => {
                return response.json();
            });
    }

    getDictionaryValues(dictionaryType: string): Observable<Array<KeyValuePair>> {
        return this.httpService.get('api/MapDictionary/GetDictionaryValues?dictionaryType=' + dictionaryType, HeaderType.Json)
            .map((response: Response) => {
                return <Array<KeyValuePair>>response.json();
            });
    }


    updateMappings(mappings: Array<KeyValuePair>, dictionaryType: string): Observable<any> {
        return this.httpService.post('api/MapDictionary/UpdateMappings?dictionaryType=' + dictionaryType, mappings, HeaderType.Json)
            .map((response: Response) => {
                return response;
            });
    }
}