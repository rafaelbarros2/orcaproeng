import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcamentoBaseDadosComponent } from './orcamento-base-dados.component';

describe('OrcamentoBaseDadosComponent', () => {
  let component: OrcamentoBaseDadosComponent;
  let fixture: ComponentFixture<OrcamentoBaseDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrcamentoBaseDadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrcamentoBaseDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
