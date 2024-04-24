import { Component, NgModule, OnInit } from '@angular/core';
import { BaseDadosOrcamento } from '../model/base-dados.model';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
  selector: 'app-orcamento-base-dados',
  standalone: true,
  imports: [CommonModule,DropdownModule,FormsModule,FieldsetModule],
  templateUrl: './orcamento-base-dados.component.html',
  styleUrl: './orcamento-base-dados.component.scss'
})
export class OrcamentoBaseDadosComponent implements OnInit{

  baseDadosOrcamentoList: BaseDadosOrcamento[]=[];
  selectedEstado: any;
  estados: any[] = [
    { uf: 'UF1' },
    { uf: 'UF2' },
    { uf: 'UF3' }
    // Adicione mais estados conforme necessário
  ];

  estado: any; // Variável para armazenar o estado selecionad
  ngOnInit(): void {
    const dados1: BaseDadosOrcamento = {
        nome: "Exemplo",
        estado: "",
        data: new Date()
      };

      const dados2: BaseDadosOrcamento = {
        nome: "Exemplo",
        estado: "",
        data: new Date()
      };

      const dados3: BaseDadosOrcamento = {
        nome: "Exemplo",
        estado: "",
        data: new Date()
      };

      this.baseDadosOrcamentoList.push(dados1,dados2,dados3);
  }

}
