import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHousesComponent } from './product-houses.component';

describe('ProductHousesComponent', () => {
  let component: ProductHousesComponent;
  let fixture: ComponentFixture<ProductHousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductHousesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
