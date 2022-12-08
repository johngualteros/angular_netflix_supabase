import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss']
})
export class TrendsComponent implements OnInit {

  moviesTrendFirstPage: any[]  = [];
  moviesTrendSecondPage: any[] = [];
  moviesTrendThirdPage: any[]  = [];
  moviesTrendFourthPage: any[] = [];

  constructor(private apiServicce: ApiService) { }

  ngOnInit(): void {
    this.getTrendMovies(1);
    this.getTrendMovies(2);
    this.getTrendMovies(3);
    this.getTrendMovies(4);
  }

  getTrendMovies(page: number){
    this.apiServicce.getTopRatedMovies(page).subscribe((data:any)=>{
      if(page === 1){
        this.moviesTrendFirstPage = data.results;
      }
      if(page === 2){
        this.moviesTrendSecondPage = data.results;
      }
      if(page === 3){
        this.moviesTrendThirdPage = data.results;
      }
      if(page === 4){
        this.moviesTrendFourthPage = data.results;
      }
    })
  }

}
