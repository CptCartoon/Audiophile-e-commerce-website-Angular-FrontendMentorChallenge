import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtocartCounterComponent } from './addtocart-counter.component';

describe('AddtocartCounterComponent', () => {
  let component: AddtocartCounterComponent;
  let fixture: ComponentFixture<AddtocartCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddtocartCounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddtocartCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
