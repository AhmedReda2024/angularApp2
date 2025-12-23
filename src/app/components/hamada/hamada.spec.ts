import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hamada } from './hamada';

describe('Hamada', () => {
  let component: Hamada;
  let fixture: ComponentFixture<Hamada>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hamada]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hamada);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
