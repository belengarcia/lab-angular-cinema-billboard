import { Router } from '@angular/router';
import { MoviesService } from './../../../shared/services/movies.service';
import { Movie } from './../../../shared/models/movie.model'

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies : Array<Movie> = []

  constructor(private movieService : MoviesService, private router: Router) { }

  ngOnInit() {
    this.movies = this.movieService.getMovies()
    console.log(this.movies)
  }

  clickDetails(movie: Movie){
    this.router.navigate([`/movies/${movie.id}`])
  }

}
