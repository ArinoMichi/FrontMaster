import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionfuncionescomponentComponent } from './seleccionfuncionescomponent.component';

describe('SeleccionfuncionescomponentComponent', () => {
  let component: SeleccionfuncionescomponentComponent;
  let fixture: ComponentFixture<SeleccionfuncionescomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeleccionfuncionescomponentComponent]
    });
    fixture = TestBed.createComponent(SeleccionfuncionescomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
