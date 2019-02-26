import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut3Component } from './tut3.component';

describe('Tut3Component', () => {
  let component: Tut3Component;
  let fixture: ComponentFixture<Tut3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tut3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tut3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
