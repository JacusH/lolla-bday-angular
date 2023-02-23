import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHouseFormComponent } from './product-house-form.component';

describe('ProductHouseFormComponent', () => {
  let component: ProductHouseFormComponent;
  let fixture: ComponentFixture<ProductHouseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductHouseFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductHouseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
