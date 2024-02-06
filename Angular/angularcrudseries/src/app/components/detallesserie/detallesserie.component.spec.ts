import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesserieComponent } from './detallesserie.component';

describe('DetallesserieComponent', () => {
  let component: DetallesserieComponent;
  let fixture: ComponentFixture<DetallesserieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesserieComponent]
    });
    fixture = TestBed.createComponent(DetallesserieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
