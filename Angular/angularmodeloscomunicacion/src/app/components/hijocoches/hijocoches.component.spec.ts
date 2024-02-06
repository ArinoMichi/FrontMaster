import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijocochesComponent } from './hijocoches.component';

describe('HijocochesComponent', () => {
  let component: HijocochesComponent;
  let fixture: ComponentFixture<HijocochesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HijocochesComponent]
    });
    fixture = TestBed.createComponent(HijocochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
