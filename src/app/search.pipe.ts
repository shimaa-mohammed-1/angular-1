import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(container:any[],klma:string) {
    if (klma ==  undefined)
    {
      return container;
    };

    return container.filter(function(container)
    {
     return container.title.toLowerCase().includes(klma.toLowerCase())

    })
  }

}
