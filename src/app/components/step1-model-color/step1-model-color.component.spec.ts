import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1ModelColorComponent } from './step1-model-color.component';

describe('Step1ModelColorComponent', () => {
  let component: Step1ModelColorComponent;
  let fixture: ComponentFixture<Step1ModelColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step1ModelColorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Step1ModelColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
