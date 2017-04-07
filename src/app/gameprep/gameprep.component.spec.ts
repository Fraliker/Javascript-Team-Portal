/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GameprepComponent } from './gameprep.component';

describe('GameprepComponent', () => {
  let component: GameprepComponent;
  let fixture: ComponentFixture<GameprepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameprepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameprepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
