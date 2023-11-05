import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtexamenComponent } from './CtexamenComponent';

describe('CtexamenComponent', () => {
  let component: CtexamenComponent;
  let fixture: ComponentFixture<CtexamenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CtexamenComponent]
    });
    fixture = TestBed.createComponent(CtexamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
