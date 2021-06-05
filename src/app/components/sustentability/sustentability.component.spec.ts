import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SustentabilityComponent } from './sustentability.component';

describe('SustentabilityComponent', () => {
  let component: SustentabilityComponent;
  let fixture: ComponentFixture<SustentabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SustentabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SustentabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
