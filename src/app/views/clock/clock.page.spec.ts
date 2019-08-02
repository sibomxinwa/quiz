import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockPage } from './clock.page';

describe('ClockPage', () => {
  let component: ClockPage;
  let fixture: ComponentFixture<ClockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
