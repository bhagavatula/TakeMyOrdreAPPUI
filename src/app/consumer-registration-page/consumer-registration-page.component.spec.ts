import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerRegistrationPageComponent } from './consumer-registration-page.component';

describe('ConsumerRegistrationPageComponent', () => {
  let component: ConsumerRegistrationPageComponent;
  let fixture: ComponentFixture<ConsumerRegistrationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsumerRegistrationPageComponent]
    });
    fixture = TestBed.createComponent(ConsumerRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
