import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatePageComponent } from './rate-page.component';

describe('RatePageComponent', () => {
  let component: RatePageComponent;
  let fixture: ComponentFixture<RatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
