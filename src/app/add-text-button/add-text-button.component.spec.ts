import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTextButtonComponent } from './add-text-button.component';

describe('AddTextButtonComponent', () => {
  let component: AddTextButtonComponent;
  let fixture: ComponentFixture<AddTextButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTextButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTextButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
