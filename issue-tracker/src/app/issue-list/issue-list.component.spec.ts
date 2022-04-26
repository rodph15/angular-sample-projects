import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { IssuesService } from '../services/issues.service';

import { IssueListComponent } from './issue-list.component';

describe('IssueListComponent', () => {
  let component: IssueListComponent;
  let fixture: ComponentFixture<IssueListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has showReportIssue false', () =>{
    expect(component.showReportIssue).toBeFalse();
  })

  it('should showReportIssue be false when onCloseReport is called', () =>{
    component.showReportIssue = true;
    component.onCloseReport();
    expect(component.showReportIssue).toBeFalse();
  })

  it('should issue be completed', () =>  {
    component.onConfirm(true);
    fixture.detectChanges();
    expect(component.selectedIssue?.completed).not.toBeNull()
  })

});
