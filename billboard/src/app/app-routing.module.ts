import { MovieItemComponent } from './components/movie/movie-item/movie-item.component';
import { MovieListComponent } from './components/movie/movie-list/movie-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'movies', pathMatch: 'full'}, 
  {path: 'movies', component: MovieListComponent},
  {path:'movies/:id', component: MovieItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
