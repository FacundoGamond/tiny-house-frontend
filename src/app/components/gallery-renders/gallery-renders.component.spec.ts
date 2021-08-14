import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryRendersComponent } from './gallery-renders.component';

describe('GalleryRendersComponent', () => {
  let component: GalleryRendersComponent;
  let fixture: ComponentFixture<GalleryRendersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryRendersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryRendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
