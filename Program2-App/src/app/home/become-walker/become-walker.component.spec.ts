import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeWalkerComponent } from './become-walker.component';

describe('BecomeWalkerComponent', () => {
  let component: BecomeWalkerComponent;
  let fixture: ComponentFixture<BecomeWalkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeWalkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeWalkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
