import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentEtEnfant } from './parent-et-enfant';

describe('ParentEtEnfant', () => {
  let component: ParentEtEnfant;
  let fixture: ComponentFixture<ParentEtEnfant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentEtEnfant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentEtEnfant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
