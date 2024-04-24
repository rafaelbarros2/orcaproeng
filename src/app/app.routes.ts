import { Routes } from '@angular/router';
import { ConfigOrcamentoComponent } from './orcamento/config-orcamento/config-orcamento.component';
import { OrcamentoBaseDadosComponent } from './orcamento/orcamento-base-dados/orcamento-base-dados.component';
import { StepsConfigOrcamentoComponent } from './orcamento/steps-config-orcamento/steps-config-orcamento.component';
import { OrcamentoEditComponent } from './orcamento/orcamento-edit/orcamento-edit.component';

export const routes: Routes = [
  { path: 'config-orcamento', component: StepsConfigOrcamentoComponent },
  { path: 'orcamento', component: OrcamentoEditComponent },
];
