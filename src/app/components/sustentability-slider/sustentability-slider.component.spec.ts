import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SustentabilitySliderComponent } from './sustentability-slider.component';

describe('SustentabilitySliderComponent', () => {
  let component: SustentabilitySliderComponent;
  let fixture: ComponentFixture<SustentabilitySliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SustentabilitySliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SustentabilitySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
