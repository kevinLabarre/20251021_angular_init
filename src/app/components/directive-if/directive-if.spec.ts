import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveIf } from './directive-if';

describe('DirectiveIf', () => {
  let component: DirectiveIf;
  let fixture: ComponentFixture<DirectiveIf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveIf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveIf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
