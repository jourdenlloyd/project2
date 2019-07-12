import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontScreenComponent } from './front-screen.component';

describe('FrontScreenComponent', () => {
  let component: FrontScreenComponent;
  let fixture: ComponentFixture<FrontScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
