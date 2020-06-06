import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageActiviesComponent } from './village-activies.component';

describe('VillageActiviesComponent', () => {
  let component: VillageActiviesComponent;
  let fixture: ComponentFixture<VillageActiviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillageActiviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageActiviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
