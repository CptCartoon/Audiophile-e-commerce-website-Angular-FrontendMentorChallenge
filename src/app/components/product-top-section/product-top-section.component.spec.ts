import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTopSectionComponent } from './product-top-section.component';

describe('ProductTopSectionComponent', () => {
  let component: ProductTopSectionComponent;
  let fixture: ComponentFixture<ProductTopSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductTopSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductTopSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
