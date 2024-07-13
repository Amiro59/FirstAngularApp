import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../tag/data-service';

@Injectable({
  providedIn: 'root',
})
export class MovieService extends DataService {
  constructor(http: HttpClient) {
    super(http, 'https://imdb.com/movies');
  }

  getMovies() {
    return this.create({});
  }
  sdfsdf;
}
jksdfjkdsf
