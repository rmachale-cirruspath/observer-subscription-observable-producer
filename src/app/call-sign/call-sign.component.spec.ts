import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallSignComponent } from './call-sign.component';

describe('CallSignComponent', () => {
  let component: CallSignComponent;
  let fixture: ComponentFixture<CallSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallSignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
