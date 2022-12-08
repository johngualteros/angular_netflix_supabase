import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  id: number = 0;

  movie: any;

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id);
    });
    this.getOneMovie(this.id);
  }

  getOneMovie(id: number) {
    this.apiService.getOnePopularMovie(id).subscribe((data) => {
      this.movie = data;
    });
  }

}
