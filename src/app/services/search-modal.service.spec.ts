import { TestBed } from '@angular/core/testing';

import { SearchModalService } from './search-modal.service';

describe('SearchModalService', () => {
  let service: SearchModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
