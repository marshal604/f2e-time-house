/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TomatoCountComponent } from './tomato-count.component';

describe('TomatoCountComponent', () => {
  let component: TomatoCountComponent;
  let fixture: ComponentFixture<TomatoCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomatoCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomatoCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
