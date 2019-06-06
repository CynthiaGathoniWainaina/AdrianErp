import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedQuoteFormComponent } from './approved-quote-form.component';

describe('ApprovedQuoteFormComponent', () => {
  let component: ApprovedQuoteFormComponent;
  let fixture: ComponentFixture<ApprovedQuoteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedQuoteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedQuoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
