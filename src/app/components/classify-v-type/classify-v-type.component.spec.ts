import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifyVTypeComponent } from './classify-v-type.component';

describe('ClassifyVTypeComponent', () => {
  let component: ClassifyVTypeComponent;
  let fixture: ComponentFixture<ClassifyVTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassifyVTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassifyVTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
