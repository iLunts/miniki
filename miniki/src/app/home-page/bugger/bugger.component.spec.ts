import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuggerComponent } from './bugger.component';

describe('BuggerComponent', () => {
  let component: BuggerComponent;
  let fixture: ComponentFixture<BuggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
