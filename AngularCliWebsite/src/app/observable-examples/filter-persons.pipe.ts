import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPersons'
})
export class FilterPersonsPipe implements PipeTransform {

  transform(items: any, searchText): any {    
    if(!searchText || searchText.length === 0){return items;}
    return items.filter(item => item.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);

  }

}
