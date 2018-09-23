import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../shared/models/movie.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieArray : Array<Movie> = [] 

  constructor(private router: Router,
    private movieService : MoviesService) { }

  ngOnInit() {
    this.getMovies()
  }
  getMovies() : void{
    this.movieArray = this.movieService.getMovies()
  } 
}
