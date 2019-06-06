import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofFormComponent } from './proof-form.component';

describe('ProofFormComponent', () => {
  let component: ProofFormComponent;
  let fixture: ComponentFixture<ProofFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProofFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProofFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
