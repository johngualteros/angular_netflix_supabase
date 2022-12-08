import { Component, Input, OnInit } from '@angular/core';
import { SupabaseService } from 'src/app/services/supabase.service';
import { AuthSession } from '@supabase/supabase-js'
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private readonly supabase: SupabaseService, private apiService: ApiService) { }


  moviesPopularFirstPage: any[] = [];
  moviesPopularSecondPage: any[] = [];
  moviesPopularThirdPage: any[] = [];
  moviesPopularFourthPage: any[] = [];


  ngOnInit(): void {
    this.getMoviesPopularFirstPage();
    this.getMoviesPopularSecondPage();
    this.getMoviesPopularThirdPage();
    this.getMoviesPopularFourthPage();
  }

  @Input()
  session!: AuthSession


  getMoviesPopularFirstPage() {
    this.apiService.getPopularMovies(1).subscribe((data: any) => {
      this.moviesPopularFirstPage = data.results;
    });
  }

  getMoviesPopularSecondPage() {
    this.apiService.getPopularMovies(2).subscribe((data: any) => {
      this.moviesPopularSecondPage = data.results;
    });
  }

  getMoviesPopularThirdPage() {
    this.apiService.getPopularMovies(3).subscribe((data: any) => {
      this.moviesPopularThirdPage = data.results;
    });
  }

  getMoviesPopularFourthPage() {
    this.apiService.getPopularMovies(4).subscribe((data: any) => {
      this.moviesPopularFourthPage = data.results;
    });
  }

  getPopularMovies(page: number) {
    this.apiService.getPopularMovies(page).subscribe((data: any) => {
      return data.results;
    });
  }

}
