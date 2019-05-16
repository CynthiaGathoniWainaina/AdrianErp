import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListingDetailedComponent } from './task-listing-detailed.component';

describe('TaskListingDetailedComponent', () => {
  let component: TaskListingDetailedComponent;
  let fixture: ComponentFixture<TaskListingDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListingDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListingDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
