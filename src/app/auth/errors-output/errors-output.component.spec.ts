import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsOutputComponent } from './errors-output.component';

describe('ErrorsOutputComponent', () => {
  let component: ErrorsOutputComponent;
  let fixture: ComponentFixture<ErrorsOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorsOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
