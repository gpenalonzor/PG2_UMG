import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaalumnoComponent } from './notaalumno.component';

describe('NotaalumnoComponent', () => {
  let component: NotaalumnoComponent;
  let fixture: ComponentFixture<NotaalumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotaalumnoComponent]
    });
    fixture = TestBed.createComponent(NotaalumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
