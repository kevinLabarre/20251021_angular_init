import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfantOutput } from './enfant-output';

describe('EnfantOutput', () => {
  let component: EnfantOutput;
  let fixture: ComponentFixture<EnfantOutput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnfantOutput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnfantOutput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
