import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalized'})
export class CapitalizedPipe implements PipeTransform {
    transform(value:string, all:boolean = true): any {
        value = value.toLowerCase();
        var words = value.split(" ");
        
        if (all) {
            for (let i in words) {
                words[i] = words[i][0].toUpperCase() + words[i].slice(1); // Can be substr(1).
            }
        }
        else {
            words[0] = words[0][0].toUpperCase() + words[0].slice(1);
        }
        
    
        return words.join(" ");
    }
}