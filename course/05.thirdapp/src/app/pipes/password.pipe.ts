import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    console.log(value.length);
    console.log(args);
    var valueHide:string;
    for (let i=0; i<value.length; i++) {
      if (i == 0) {
        valueHide = "*";
      }
      else {
        valueHide = valueHide + "*";
      }
    }
    console.log(valueHide);
    if (args[0] == true) {
      return value;
    } 
    else {
      return valueHide;
    }
  }

}
