import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  moviesPopular : any [] = [];
  moviesTopRating: any[] = [];
  seriesPopular: any[]   = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getPopularMovies(1);
    this.getTopRatingMovies(1);
    this.getPopularSeries(1);
  }

  getPopularMovies(page: number){
    this.apiService.getPopularMovies(page).subscribe((data: any) => {
      this.moviesPopular = data.results;
    })
  }

  getTopRatingMovies(page: number){
    this.apiService.getTopRatedMovies(page).subscribe((data: any) => {
      this.moviesTopRating = data.results;
    })
  }

  getPopularSeries(page: number){
    this.apiService.getPopularSeries(page).subscribe((data: any) => {
      this.seriesPopular = data.results;
    })
  }

}
