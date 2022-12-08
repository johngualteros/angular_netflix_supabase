import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMovieSmallComponent } from './card-movie-small.component';

describe('CardMovieSmallComponent', () => {
  let component: CardMovieSmallComponent;
  let fixture: ComponentFixture<CardMovieSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMovieSmallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMovieSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
