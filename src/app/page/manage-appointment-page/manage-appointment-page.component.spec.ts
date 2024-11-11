import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAppointmentPageComponent } from './manage-appointment-page.component';

describe('ManageAppointmentPageComponent', () => {
  let component: ManageAppointmentPageComponent;
  let fixture: ComponentFixture<ManageAppointmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAppointmentPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAppointmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
