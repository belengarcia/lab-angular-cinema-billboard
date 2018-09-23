import { MovieItemComponent } from './components/movie/movie-item/movie-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/misc/navbar/navbar.component';
import { MovieListComponent } from './components/movie/movie-list/movie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieListComponent,
    MovieItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
