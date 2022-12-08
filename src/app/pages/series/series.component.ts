import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  seriesFirstPage: any[] = [];
  seriesSecondPage: any[] = [];
  seriesThirdPage: any[] = [];
  seriesFourthPage: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getSeries(1);
    this.getSeries(2);
    this.getSeries(3);
    this.getSeries(4);
  }

  getSeries(page: number){
    this.apiService.getPopularSeries(page).subscribe((data: any) => {
      console.log(data);
      if (page === 1) {
        this.seriesFirstPage = data.results;
      }
      if (page === 2) {
        this.seriesSecondPage = data.results;
      }
      if (page === 3) {
        this.seriesThirdPage = data.results;
      }
      if (page === 4) {
        this.seriesFourthPage = data.results;
      }
    });
  }
}
