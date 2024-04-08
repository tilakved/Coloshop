import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'addDollar'
})
export class AddDollarPipe implements PipeTransform {
  transform(value: any): any {
      // return value.substring(0, value.indexOf(',')) + '.' + value.substring(value.indexOf(',')+1, )
    return value;

  }
}
