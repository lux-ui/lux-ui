import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RwdMenuComponent } from './rwd-menu.component';

describe('RwdMenuComponent', () => {
  let component: RwdMenuComponent;
  let fixture: ComponentFixture<RwdMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RwdMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RwdMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
