import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricalSubtasksComponent } from './electrical-subtasks.component';

describe('ElectricalSubtasksComponent', () => {
  let component: ElectricalSubtasksComponent;
  let fixture: ComponentFixture<ElectricalSubtasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricalSubtasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricalSubtasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
