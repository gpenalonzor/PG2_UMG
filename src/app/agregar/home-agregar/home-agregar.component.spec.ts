import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAgregarComponent } from './home-agregar.component';

describe('HomeAgregarComponent', () => {
  let component: HomeAgregarComponent;
  let fixture: ComponentFixture<HomeAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeAgregarComponent]
    });
    fixture = TestBed.createComponent(HomeAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
