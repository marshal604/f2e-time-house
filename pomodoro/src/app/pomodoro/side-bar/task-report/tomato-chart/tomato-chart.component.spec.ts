/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TomatoChartComponent } from './tomato-chart.component';

describe('TomatoChartComponent', () => {
  let component: TomatoChartComponent;
  let fixture: ComponentFixture<TomatoChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomatoChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomatoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
