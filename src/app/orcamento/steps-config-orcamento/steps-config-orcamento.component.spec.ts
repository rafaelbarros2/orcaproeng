import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsConfigOrcamentoComponent } from './steps-config-orcamento.component';

describe('StepsConfigOrcamentoComponent', () => {
  let component: StepsConfigOrcamentoComponent;
  let fixture: ComponentFixture<StepsConfigOrcamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepsConfigOrcamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepsConfigOrcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
