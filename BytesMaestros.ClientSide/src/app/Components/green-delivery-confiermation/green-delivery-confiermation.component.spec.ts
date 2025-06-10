import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenDeliveryConfiermationComponent } from './green-delivery-confiermation.component';

describe('GreenDeliveryConfiermationComponent', () => {
  let component: GreenDeliveryConfiermationComponent;
  let fixture: ComponentFixture<GreenDeliveryConfiermationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreenDeliveryConfiermationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreenDeliveryConfiermationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
