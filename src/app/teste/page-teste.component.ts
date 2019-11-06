import { PhotosService } from './../photos/photos.service';
import { Component } from '@angular/core';

@Component({
    selector:'ap-page-teste',
    templateUrl:'./page-teste.component.html'
})
export class PageTesteComponent{

    photos: any[] = [];

    constructor(private photoService: PhotosService){}

    ngOnInit(){
        
        this.photoService.listFromUser('flavio')
          .subscribe(photos => this.photos = photos );
      }
}