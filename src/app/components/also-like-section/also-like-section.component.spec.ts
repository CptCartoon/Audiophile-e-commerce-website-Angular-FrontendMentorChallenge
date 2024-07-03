import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsoLikeSectionComponent } from './also-like-section.component';

describe('AlsoLikeSectionComponent', () => {
  let component: AlsoLikeSectionComponent;
  let fixture: ComponentFixture<AlsoLikeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlsoLikeSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlsoLikeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
