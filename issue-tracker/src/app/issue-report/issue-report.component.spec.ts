import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IssuesService } from '../services/issues.service';

import { IssueReportComponent } from './issue-report.component';

describe('IssueReportComponent', () => {
  let component: IssueReportComponent;
  let fixture: ComponentFixture<IssueReportComponent>;
  let issueService:IssuesService = new IssuesService();
  let formBuilder:FormBuilder = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueReportComponent ],
      providers: [
        { provide: FormBuilder, useValue: formBuilder },
        { provide: IssuesService, useValue: issueService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should issueForm be FormGroup instance', () => {
    expect(component.issueForm).toBeInstanceOf(FormGroup);
  });

  it('should create issue', () =>{

    component.issueForm = formBuilder.group({
      title: ['teste'],
      description: [''],
      priority: ['high'],
      type: ['Bug']
    });

    component.addIssue();

    expect(issueService.getPendingIssues().length).toBeGreaterThan(0);
  })

});
