import { Component, ElementRef, EventEmitter, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinct, filter, fromEvent, map, tap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { SearchModalService } from 'src/app/services/search-modal.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  movies: any[] = [];
  constructor(private searchModal: SearchModalService, private apiService: ApiService) { }

  @ViewChild('movieSearchInput') movieSearchInput: ElementRef;

  ngOnInit(): void {
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    console.log(event.key);
    this.closeModal();
  }  

  closeModal(){
    this.searchModal.$openModal.emit(false);
  }

  ngAfterViewInit(): void {
    fromEvent<Event>(this.movieSearchInput.nativeElement, 'keyup')
      .pipe(
        map((event: Event) => {
          const searchTerm = (event.target as HTMLInputElement).value;
          return searchTerm;
        }),
        filter((searchTerm: string) => searchTerm.length > 3),
        debounceTime(1000),
        distinct(),
        tap((searchTerm: string) => {
          console.log(searchTerm);
        })
      )
      .subscribe((searchTerm: string) => {
        this.getMovies(searchTerm);
      });
  }

  getMovies(searchTerm: string){
    this.apiService.getSearchMovieName(searchTerm).subscribe((data: any) => {
      this.movies = data.results;
    });
  }



}
