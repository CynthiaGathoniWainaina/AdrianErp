import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteelCostFormComponent } from './steel-cost-form.component';

describe('SteelCostFormComponent', () => {
  let component: SteelCostFormComponent;
  let fixture: ComponentFixture<SteelCostFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteelCostFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteelCostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
