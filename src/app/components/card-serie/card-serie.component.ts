import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-serie',
  templateUrl: './card-serie.component.html',
  styleUrls: ['./card-serie.component.scss']
})
export class CardSerieComponent implements OnInit {

  @Input() serie: any;
  constructor() { }

  ngOnInit(): void {
  }


}
