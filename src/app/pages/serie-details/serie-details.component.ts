import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-serie-details',
  templateUrl: './serie-details.component.html',
  styleUrls: ['./serie-details.component.scss']
})
export class SerieDetailsComponent implements OnInit {

  id: number = 0;
  serie: any;

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id);
    });
    this.getOneSerie(this.id);
  }

  getOneSerie(id: number) {
    this.apiService.getOnePopularSerie(id).subscribe((data) => {
      this.serie = data;
    });
  }

}
