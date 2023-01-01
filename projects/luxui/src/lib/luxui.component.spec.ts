import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxuiComponent } from './luxui.component';

describe('LuxuiComponent', () => {
  let component: LuxuiComponent;
  let fixture: ComponentFixture<LuxuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuxuiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuxuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
