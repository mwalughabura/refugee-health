import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstaidPage } from './firstaid.page';

describe('FirstaidPage', () => {
  let component: FirstaidPage;
  let fixture: ComponentFixture<FirstaidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstaidPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstaidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
