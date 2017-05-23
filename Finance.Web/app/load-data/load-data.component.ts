import { Component } from '@angular/core';
import { FileLoadService, AlertService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'load-data.component.html'
})

export class LoadDataComponent {
    private isUploadingNow: boolean = false;
    private dictionaryType: any;

    constructor(private fileLoadService: FileLoadService,
    
        private alertService: AlertService) {
    }

    fileChange(event: any) {
        let fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            this.isUploadingNow = true;
            this.fileLoadService.uploadFile("/api/LoadData/UploadFile", fileList).subscribe(
                () => {
                    this.isUploadingNow = false;
                },
                error => {
                    error._body = (JSON.parse(error.text())).message;
                    this.alertService.error(error);
                });
        }
    }

    fileDictionaryChange(event: any) {
        let fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            this.isUploadingNow = true;
            this.fileLoadService.uploadDictionary("/api/LoadData/UploadDictionary", fileList, this.dictionaryType).subscribe(
                () => {
                    this.isUploadingNow = false;
                },
                error => {
                    error._body = (JSON.parse(error.text())).message;
                    this.alertService.error(error);
                });
        }
    }

}