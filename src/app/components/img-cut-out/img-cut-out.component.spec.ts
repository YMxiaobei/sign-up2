import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCutOutComponent } from './img-cut-out.component';

describe('ImgCutOutComponent', () => {
  let component: ImgCutOutComponent;
  let fixture: ComponentFixture<ImgCutOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgCutOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgCutOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
