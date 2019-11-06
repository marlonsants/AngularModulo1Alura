import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotosComponent } from './photos.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotoComponent } from './photo-list/photo/photo.component';
import { FilterByDescription } from './filter-by-description.pipe';

@NgModule({
    declarations:[
        PhotosComponent,
        PhotoListComponent, 
        PhotoFormComponent,
        PhotoComponent,
        FilterByDescription
    ],
    imports:[
        HttpClientModule,
        CommonModule
    ],
    exports:[PhotosComponent,PhotoComponent]
})

export class PhotosModule{

}