import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantEnfant } from './composant-enfant';

describe('ComposantEnfant', () => {
  let component: ComposantEnfant;
  let fixture: ComponentFixture<ComposantEnfant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComposantEnfant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantEnfant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
