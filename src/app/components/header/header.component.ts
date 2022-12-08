import { Component, EventEmitter, HostListener, OnInit } from '@angular/core';
import { SearchModalService } from 'src/app/services/search-modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchInput: boolean = false;

  constructor(private searchModal : SearchModalService) { }

  ngOnInit(): void {
    this.searchModal.$openModal.subscribe((value) => {
      this.searchInput = value;
    });
  }

  @HostListener('document:keydown.control.k', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    this.searchInputToggle();
  }

  searchInputToggle(): void {
    this.searchModal.$openModal.emit(true);
  }

}
