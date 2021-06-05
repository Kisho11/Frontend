import { TestBed, inject } from '@angular/core/testing';

import { AddcropService } from './addcrop.service';

describe('AddcropService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddcropService]
    });
  });

  it('should be created', inject([AddcropService], (service: AddcropService) => {
    expect(service).toBeTruthy();
  }));
});
