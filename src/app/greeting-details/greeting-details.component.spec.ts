import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingDetailsComponent } from './greeting-details.component';

describe('GreetingDetailsComponent', () => {
  let component: GreetingDetailsComponent;
  let fixture: ComponentFixture<GreetingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetingDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
