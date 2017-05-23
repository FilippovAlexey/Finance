import { Injectable } from '@angular/core';
import { HttpService } from './index';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';


@Injectable()
export class FileLoadService {
    constructor(
        private httpService: HttpService
    ) {
    }

    uploadDictionary(path: string, fileList: FileList, dictType: string): Observable<Response> {
        let file: File = fileList[0];
        let formData: FormData = new FormData();
        formData.append('uploadFile', file);
        formData.append('dictType', dictType);
        return this.httpService.post(path, formData);
    }

    uploadFile(path: string, fileList: FileList): Observable<Response> {
        let file: File = fileList[0];
        let formData: FormData = new FormData();
        formData.append('uploadFile', file);
        return this.httpService.post(path, formData);      
    }
}