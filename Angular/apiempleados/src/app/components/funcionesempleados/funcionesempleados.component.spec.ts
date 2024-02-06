import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionesempleadosComponent } from './funcionesempleados.component';

describe('FuncionesempleadosComponent', () => {
  let component: FuncionesempleadosComponent;
  let fixture: ComponentFixture<FuncionesempleadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionesempleadosComponent]
    });
    fixture = TestBed.createComponent(FuncionesempleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
