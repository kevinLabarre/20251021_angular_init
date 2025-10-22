import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveFor } from './directive-for';

describe('DirectiveFor', () => {
  let component: DirectiveFor;
  let fixture: ComponentFixture<DirectiveFor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveFor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveFor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
