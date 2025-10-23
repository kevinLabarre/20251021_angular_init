import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestApi } from './request-api';

describe('RequestApi', () => {
  let component: RequestApi;
  let fixture: ComponentFixture<RequestApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestApi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
