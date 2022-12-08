import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-movie-small',
  templateUrl: './card-movie-small.component.html',
  styleUrls: ['./card-movie-small.component.scss']
})
export class CardMovieSmallComponent implements OnInit {

  @Input() movie: any;

  constructor() { }

  ngOnInit(): void {
  }

}
