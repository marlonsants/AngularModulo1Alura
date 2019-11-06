import { CommonModule } from '@angular/common';

import { NgModule } from "@angular/core";

import { PageTesteComponent } from './page-teste.component';
import { PhotosModule } from './../photos/photos.module';
@NgModule({
    declarations:[PageTesteComponent],
    imports: [
        CommonModule,
        PhotosModule
    ],
})
export class PageTesteModule{

}