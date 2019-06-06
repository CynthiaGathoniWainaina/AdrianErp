import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialTeamFormsComponent } from './commercial-team-forms.component';

describe('CommercialTeamFormsComponent', () => {
  let component: CommercialTeamFormsComponent;
  let fixture: ComponentFixture<CommercialTeamFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercialTeamFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialTeamFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
