import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bs241SubtasksComponent } from './bs241-subtasks.component';

describe('Bs241SubtasksComponent', () => {
  let component: Bs241SubtasksComponent;
  let fixture: ComponentFixture<Bs241SubtasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bs241SubtasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bs241SubtasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
