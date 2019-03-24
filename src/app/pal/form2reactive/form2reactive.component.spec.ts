import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form2reactiveComponent } from './form2reactive.component';

describe('Form2reactiveComponent', () => {
  let component: Form2reactiveComponent;
  let fixture: ComponentFixture<Form2reactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form2reactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form2reactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
