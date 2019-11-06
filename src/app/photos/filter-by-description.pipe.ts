import { Pipe, PipeTransform } from '@angular/core';

import { Photo } from './photo';


@Pipe({
    name: 'filterByDescription'
})
export class FilterByDescription implements PipeTransform{
    transform(photos: Photo[], description: string) {
        description = description.toLowerCase().trim();

        if(!description){
            return photos;
        }else{
            return photos.filter(photos => photos.description.toLowerCase().includes(description));
        }
    }

}