import { TestBed } from '@angular/core/testing';

import { CarnetService } from './carnet.service';

describe('CarnetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarnetService = TestBed.get(CarnetService);
    expect(service).toBeTruthy();
  });
});
