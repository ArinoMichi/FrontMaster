import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosapiComponent } from './empleadosapi.component';

describe('EmpleadosapiComponent', () => {
  let component: EmpleadosapiComponent;
  let fixture: ComponentFixture<EmpleadosapiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadosapiComponent]
    });
    fixture = TestBed.createComponent(EmpleadosapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
