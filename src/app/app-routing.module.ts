import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { PageTesteComponent } from './teste/page-teste.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';


const routes: Routes = [
  {path: ':userName/photos',
   component: PhotoListComponent,
   resolve:{
     photos: PhotoListResolver
   }
  },
  {path: 'p/add', component: PhotoFormComponent},
  {path:'pageteste', component: PageTesteComponent},
  {path:'**', component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
