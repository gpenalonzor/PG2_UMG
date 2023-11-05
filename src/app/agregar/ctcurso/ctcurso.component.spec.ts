import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtcursoComponent } from './ctcurso.component';

describe('CtcursoComponent', () => {
  let component: CtcursoComponent;
  let fixture: ComponentFixture<CtcursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CtcursoComponent]
    });
    fixture = TestBed.createComponent(CtcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
