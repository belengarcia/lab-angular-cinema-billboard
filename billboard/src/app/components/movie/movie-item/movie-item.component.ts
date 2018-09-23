import { Movie } from './../../../shared/models/movie.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  // @Input() movie: Movie = new Movie()

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

  }

}
