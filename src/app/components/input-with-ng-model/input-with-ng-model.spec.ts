import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithNgModel } from './input-with-ng-model';

describe('InputWithNgModel', () => {
  let component: InputWithNgModel;
  let fixture: ComponentFixture<InputWithNgModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputWithNgModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputWithNgModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
