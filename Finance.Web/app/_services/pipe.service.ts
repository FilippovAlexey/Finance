import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'keys' })

export class KeysPipe implements PipeTransform {
    transform(value: any, args: string[]): any {
        let keys: any[] = [];
        for (let key in value) {
            var formattedValue: any = value[key];
            var isNumber: boolean = typeof formattedValue == "number";

            if (!isNumber && formattedValue.match(/[a-z]/i)) {
                var numberDate: number = Date.parse(formattedValue);
                var isDate: boolean = !isNaN(numberDate);
                var isDateRegex: boolean = this.isDateRegex(formattedValue);

                if (isDate && isDateRegex) {
                    var date = new Date(formattedValue);
                    formattedValue = date.toLocaleDateString();
                }
            }

            keys.push({ key: key, value: formattedValue });
        }
        return keys;
    }

    isDateRegex(val: string) : boolean {
        var datePat = /(201[4-9]|202[0-9])-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])T/;        
        var matchArray = val.match(datePat); 

        if (matchArray == null) {
            return false;
        } else {
            return true;
        }
    }
}