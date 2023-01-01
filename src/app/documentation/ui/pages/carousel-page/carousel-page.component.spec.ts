import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPageComponent } from './carousel-page.component';

describe('CarouselPageComponent', () => {
  let component: CarouselPageComponent;
  let fixture: ComponentFixture<CarouselPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
