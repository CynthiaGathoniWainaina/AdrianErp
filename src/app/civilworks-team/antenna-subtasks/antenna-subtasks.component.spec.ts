import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntennaSubtasksComponent } from './antenna-subtasks.component';

describe('AntennaSubtasksComponent', () => {
  let component: AntennaSubtasksComponent;
  let fixture: ComponentFixture<AntennaSubtasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntennaSubtasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntennaSubtasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
