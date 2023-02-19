import { TestBed } from '@angular/core/testing';

import { ProductHouseService } from './product-house.service';

describe('ProductHouseService', () => {
  let service: ProductHouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductHouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
