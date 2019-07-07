import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ImageService } from './image-service.service'
import { ImageListComponent } from './image-list/image-list.component';
import { ImageInfoComponent } from './image-info/image-info.component';

const routes: Routes = [
  { path: '', component: ImageListComponent },
  { path: 'image/:id', component: ImageInfoComponent} 
];

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent,
    ImageInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [ ImageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
