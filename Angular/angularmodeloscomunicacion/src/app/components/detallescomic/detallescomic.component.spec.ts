import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallescomicComponent } from './detallescomic.component';

describe('DetallescomicComponent', () => {
  let component: DetallescomicComponent;
  let fixture: ComponentFixture<DetallescomicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallescomicComponent]
    });
    fixture = TestBed.createComponent(DetallescomicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
