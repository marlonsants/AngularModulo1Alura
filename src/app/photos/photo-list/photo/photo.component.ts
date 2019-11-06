import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Photo } from './../../photo';

@Component({
    selector:'ap-photo',
    templateUrl:'./photo.component.html'
})
export class PhotoComponent implements OnChanges{

    constructor(){}

    @Input() photos: Photo[];
    @Input('col-width') colWith: string;
    @Input('cols-by-row') colsByRows: number;

    rows: any[] = [];

    ngOnChanges(changes: SimpleChanges){
        if(changes.photos)
            this.rows = this.groupColuns(this.photos);
    }

    groupColuns(photos: Photo[]){
        const newRows = [];

        for(let index = 0; index < photos.length; index+=this.colsByRows){
            newRows.push(photos.slice(index,index+this.colsByRows));
        }

        return newRows;
    }


}