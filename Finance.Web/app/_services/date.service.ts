import { Injectable } from '@angular/core';

@Injectable()
export class DateService {

    getDate(monthIncrement: number, fromFirstDay: boolean = false): string {
        var date = new Date();
        if (monthIncrement >= 12 || monthIncrement <= -12) {
            date.setFullYear(date.getFullYear() + monthIncrement / 12);
            monthIncrement = monthIncrement % 12;
        }

        date.setMonth(date.getMonth() + monthIncrement);

        var dd;
        if (fromFirstDay) {
            dd = 1;
        }
        else {
            dd = date.getDate();
        }

        var mm = date.getMonth() + 1;
        var yy = date.getFullYear();
        return [yy,
            (mm > 9 ? '' : '0') + mm,
            (dd > 9 ? '' : '0') + dd
        ].join('-');
    }
}