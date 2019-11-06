import { Component, Input } from '@angular/core';

@Component({
    selector:'ap-photos',
    templateUrl:'./photos.component.html'
})
export class PhotosComponent{
    
    constructor(){}

    @Input('url') url: string;
    @Input('description') description: string; 
}