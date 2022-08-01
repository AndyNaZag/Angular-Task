import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressureGaugesComponent } from './pressure-gauges.component';

describe('PressureGaugesComponent', () => {
  let component: PressureGaugesComponent;
  let fixture: ComponentFixture<PressureGaugesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PressureGaugesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PressureGaugesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
