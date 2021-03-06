import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PhotosModule } from './photos/photos.module';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';

import { PageTesteModule } from './teste/page-teste.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotosModule,
    PageTesteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
