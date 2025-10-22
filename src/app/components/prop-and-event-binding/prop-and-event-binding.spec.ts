import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropAndEventBinding } from './prop-and-event-binding';

describe('PropAndEventBinding', () => {
  let component: PropAndEventBinding;
  let fixture: ComponentFixture<PropAndEventBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropAndEventBinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropAndEventBinding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
