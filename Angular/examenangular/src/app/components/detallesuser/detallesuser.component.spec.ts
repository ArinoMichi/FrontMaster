import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesuserComponent } from './detallesuser.component';

describe('DetallesuserComponent', () => {
  let component: DetallesuserComponent;
  let fixture: ComponentFixture<DetallesuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesuserComponent]
    });
    fixture = TestBed.createComponent(DetallesuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
