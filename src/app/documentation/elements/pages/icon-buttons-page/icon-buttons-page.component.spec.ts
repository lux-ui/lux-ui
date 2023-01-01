import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconButtonsPageComponent } from './icon-buttons-page.component';

describe('IconButtonsPageComponent', () => {
  let component: IconButtonsPageComponent;
  let fixture: ComponentFixture<IconButtonsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconButtonsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconButtonsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
