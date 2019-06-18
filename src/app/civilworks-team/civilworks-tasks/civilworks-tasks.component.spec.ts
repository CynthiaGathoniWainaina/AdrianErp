import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilworksTasksComponent } from './civilworks-tasks.component';

describe('CivilworksTasksComponent', () => {
  let component: CivilworksTasksComponent;
  let fixture: ComponentFixture<CivilworksTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivilworksTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilworksTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
