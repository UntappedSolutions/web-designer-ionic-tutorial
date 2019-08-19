import { TestBed } from '@angular/core/testing';

import { StarwarsApiService } from './starwars-api.service';

describe('StarwarsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarwarsApiService = TestBed.get(StarwarsApiService);
    expect(service).toBeTruthy();
  });
});
