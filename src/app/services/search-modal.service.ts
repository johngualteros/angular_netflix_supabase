import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchModalService {

  constructor() { }

  $openModal = new EventEmitter<boolean>();
}
