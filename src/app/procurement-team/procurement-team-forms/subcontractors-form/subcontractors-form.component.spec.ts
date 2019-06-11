import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcontractorsFormComponent } from './subcontractors-form.component';

describe('SubcontractorsFormComponent', () => {
  let component: SubcontractorsFormComponent;
  let fixture: ComponentFixture<SubcontractorsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcontractorsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcontractorsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
