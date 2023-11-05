import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoComponent } from './Alumno.component';

describe('CtexamenComponent', () => {
  let component: AlumnoComponent;
  let fixture: ComponentFixture<AlumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnoComponent]
    });
    fixture = TestBed.createComponent(AlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
