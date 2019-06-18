import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoundarywallSubtasksComponent } from './boundarywall-subtasks.component';

describe('BoundarywallSubtasksComponent', () => {
  let component: BoundarywallSubtasksComponent;
  let fixture: ComponentFixture<BoundarywallSubtasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoundarywallSubtasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoundarywallSubtasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
