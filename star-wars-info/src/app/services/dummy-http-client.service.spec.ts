import { TestBed } from '@angular/core/testing';

import { DummyHttpClientService } from './dummy-http-client.service';

describe('DummyHttpClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DummyHttpClientService = TestBed.get(DummyHttpClientService);
    expect(service).toBeTruthy();
  });
});
