import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2ConfigOptionsComponent } from './step2-config-options.component';

describe('Step2ConfigOptionsComponent', () => {
  let component: Step2ConfigOptionsComponent;
  let fixture: ComponentFixture<Step2ConfigOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step2ConfigOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Step2ConfigOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
