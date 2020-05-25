import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartClassesComponent } from './smart-classes.component';

describe('SmartClassesComponent', () => {
  let component: SmartClassesComponent;
  let fixture: ComponentFixture<SmartClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
