import { TestBed, inject } from '@angular/core/testing';

import { ClashService } from './clash.service';

describe('ClashService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClashService]
    });
  });

  it('should ...', inject([ClashService], (service: ClashService) => {
    expect(service).toBeTruthy();
  }));
});
