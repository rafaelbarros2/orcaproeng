import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigOrcamentoComponent } from './config-orcamento.component';

describe('ConfigOrcamentoComponent', () => {
  let component: ConfigOrcamentoComponent;
  let fixture: ComponentFixture<ConfigOrcamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigOrcamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigOrcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
