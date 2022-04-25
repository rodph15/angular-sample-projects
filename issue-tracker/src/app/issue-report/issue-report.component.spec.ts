import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IssuesService } from '../services/issues.service';

import { IssueReportComponent } from './issue-report.component';

describe('IssueReportComponent', () => {
  let component: IssueReportComponent;
  let fixture: ComponentFixture<IssueReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueReportComponent ],
      providers: [
        { provide: FormBuilder, useValue: new FormBuilder() },
        { provide: IssuesService, useValue: new IssuesService() }
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

});
