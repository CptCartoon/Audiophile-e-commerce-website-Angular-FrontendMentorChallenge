import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsInfoSectionComponent } from './products-info-section.component';

describe('ProductsInfoSectionComponent', () => {
  let component: ProductsInfoSectionComponent;
  let fixture: ComponentFixture<ProductsInfoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsInfoSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsInfoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
