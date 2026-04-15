import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encomendar } from './encomendar';

describe('Encomendar', () => {
  let component: Encomendar;
  let fixture: ComponentFixture<Encomendar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Encomendar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encomendar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
