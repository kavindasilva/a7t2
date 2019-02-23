import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut2Component } from './tut2.component';

describe('Tut2Component', () => {
  let component: Tut2Component;
  let fixture: ComponentFixture<Tut2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tut2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tut2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
