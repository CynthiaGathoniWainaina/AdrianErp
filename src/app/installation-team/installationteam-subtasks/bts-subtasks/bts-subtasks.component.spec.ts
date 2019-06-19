import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtsSubtasksComponent } from './bts-subtasks.component';

describe('BtsSubtasksComponent', () => {
  let component: BtsSubtasksComponent;
  let fixture: ComponentFixture<BtsSubtasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtsSubtasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtsSubtasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
