import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewTemplatesComponent } from './interview-templates.component';

describe('InterviewTemplatesComponent', () => {
  let component: InterviewTemplatesComponent;
  let fixture: ComponentFixture<InterviewTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewTemplatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
