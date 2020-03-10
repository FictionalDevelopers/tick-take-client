import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotManagerComponent } from './lot-manager.component';

describe('LotManagerComponent', () => {
  let component: LotManagerComponent;
  let fixture: ComponentFixture<LotManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
