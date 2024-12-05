import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioalumnoPage } from './inicioalumno.page';

describe('InicioalumnoPage', () => {
  let component: InicioalumnoPage;
  let fixture: ComponentFixture<InicioalumnoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioalumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
