import { Router } from '@angular/router';
import { Component, ViewChild, viewChild } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ConfigOrcamentoComponent } from '../config-orcamento/config-orcamento.component';
import { OrcamentoBaseDadosComponent } from '../orcamento-base-dados/orcamento-base-dados.component';

@Component({
  selector: 'app-steps-config-orcamento',
  standalone: true,
  imports: [StepperModule,ButtonModule, CommonModule, ConfigOrcamentoComponent, OrcamentoBaseDadosComponent],
  templateUrl: './steps-config-orcamento.component.html',
  styleUrl: './steps-config-orcamento.component.scss'
})
export class StepsConfigOrcamentoComponent {
  active: number | any = 0;
  nextCallback: any;
  constructor(private router: Router) { }

  @ViewChild(ConfigOrcamentoComponent) configOrcamentoComponent!: ConfigOrcamentoComponent;
  btnConcluirConfigOrcamento(){
    this.router.navigate(['/orcamento']);

  }

  next() {
    // Verifica se o formulário é válido
    if (this.configOrcamentoComponent.formGroup.valid) {
      // Emite o evento nextCallback apenas se o formulário for válido
      this.nextCallback.emit();
    }
  }
}
