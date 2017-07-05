import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributeInfoComponent } from './contribute-info.component';

describe('ContributeInfoComponent', () => {
  let component: ContributeInfoComponent;
  let fixture: ComponentFixture<ContributeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
