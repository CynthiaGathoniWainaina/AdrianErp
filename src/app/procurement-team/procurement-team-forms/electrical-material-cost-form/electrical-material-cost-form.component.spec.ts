import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricalMaterialCostFormComponent } from './electrical-material-cost-form.component';

describe('ElectricalMaterialCostFormComponent', () => {
  let component: ElectricalMaterialCostFormComponent;
  let fixture: ComponentFixture<ElectricalMaterialCostFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricalMaterialCostFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricalMaterialCostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
