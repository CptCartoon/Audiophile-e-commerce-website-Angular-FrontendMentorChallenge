import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryLinkComponent } from './category-link.component';

describe('CategoryLinkComponent', () => {
  let component: CategoryLinkComponent;
  let fixture: ComponentFixture<CategoryLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
