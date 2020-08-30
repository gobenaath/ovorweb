import { SkypeClassesComponent } from './skype-classes.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('SkypeClassesComponent', () => {
  let component: SkypeClassesComponent;
  let fixture: ComponentFixture<SkypeClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SkypeClassesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkypeClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
