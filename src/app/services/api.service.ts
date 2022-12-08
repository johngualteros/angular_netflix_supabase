import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiKey: string =
    '?api_key=815a4e46bef64a404a095dda8eda759d&language=es-MX';

  private apiUrlPopular: string =
    'https://api.themoviedb.org/3/movie/popular?api_key=815a4e46bef64a404a095dda8eda759d&language=es-MX&page=';

  private apiUrlSinglePopular: string = 'https://api.themoviedb.org/3/movie/';

  private apiUrlTopRated: string =
    'https://api.themoviedb.org/3/movie/top_rated?api_key=815a4e46bef64a404a095dda8eda759d&language=es-MX&page=';

  private apiUrlSeries: string =
    'https://api.themoviedb.org/3/tv/popular?api_key=815a4e46bef64a404a095dda8eda759d&language=es-MX&page=';

  private apiUrlSingleSerie = 'http://api.themoviedb.org/3/tv/';

  private apiUrlSearchMovieName = 
    'https://api.themoviedb.org/3/search/movie'

  constructor(private http: HttpClient) {}

  getPopularMovies(page: number): Observable<any> {
    return this.http.get(this.apiUrlPopular + page);
  }

  getOnePopularMovie(id: number): Observable<any> {
    return this.http.get(this.apiUrlSinglePopular + id + this.apiKey);
  }

  getTopRatedMovies(page: number): Observable<any> {
    return this.http.get(this.apiUrlTopRated + page);
  }

  getPopularSeries(page: number): Observable<any> {
    return this.http.get(this.apiUrlSeries + page);
  }

  getOnePopularSerie(id: number): Observable<any> {
    return this.http.get(this.apiUrlSingleSerie + id + this.apiKey);
  }

  getSearchMovieName(name: string): Observable<any> {
    return this.http.get(this.apiUrlSearchMovieName + this.apiKey + '&query=' + name);
  }
}
