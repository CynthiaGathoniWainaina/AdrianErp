import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TowerfoundationSubtasksComponent } from './towerfoundation-subtasks.component';

describe('TowerfoundationSubtasksComponent', () => {
  let component: TowerfoundationSubtasksComponent;
  let fixture: ComponentFixture<TowerfoundationSubtasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TowerfoundationSubtasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TowerfoundationSubtasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
