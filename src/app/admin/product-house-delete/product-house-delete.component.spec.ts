import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHouseDeleteComponent } from './product-house-delete.component';

describe('ProductHouseDeleteComponent', () => {
  let component: ProductHouseDeleteComponent;
  let fixture: ComponentFixture<ProductHouseDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductHouseDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductHouseDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
