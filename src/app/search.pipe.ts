import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Array<any>, field: string): Array<any> {
    if (!field) {
          return value;
        }
        if (!value) {
              return [];
            }
            return value.filter(contact=>new RegExp(field,'gi').test(contact.userName)); 
  }

}
