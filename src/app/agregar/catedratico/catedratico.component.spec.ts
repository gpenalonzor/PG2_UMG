import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatedraticoComponent } from './catedratico.component';

describe('CatedraticoComponent', () => {
  let component: CatedraticoComponent;
  let fixture: ComponentFixture<CatedraticoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatedraticoComponent]
    });
    fixture = TestBed.createComponent(CatedraticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
