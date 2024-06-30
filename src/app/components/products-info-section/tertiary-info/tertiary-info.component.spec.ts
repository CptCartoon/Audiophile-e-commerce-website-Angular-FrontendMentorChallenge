import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TertiaryInfoComponent } from './tertiary-info.component';

describe('TertiaryInfoComponent', () => {
  let component: TertiaryInfoComponent;
  let fixture: ComponentFixture<TertiaryInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TertiaryInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TertiaryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
