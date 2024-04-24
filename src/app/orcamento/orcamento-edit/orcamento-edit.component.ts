import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { BaseDadosOrcamento } from '../model/base-dados.model';

@Component({
  selector: 'app-orcamento-edit',
  standalone: true,
  imports: [CommonModule,DropdownModule,FormsModule,FieldsetModule],
  templateUrl: './orcamento-edit.component.html',
  styleUrl: './orcamento-edit.component.scss'
})
export class OrcamentoEditComponent implements OnInit {

  isButtonVisible: boolean[] = [];
  baseDadosOrcamentoList: BaseDadosOrcamento[]=[];
  estados: any[] = [
    { uf: 'UF1' },
    { uf: 'UF2' },
    { uf: 'UF3' }
    // Adicione mais estados conforme necessário
  ];

   ngOnInit():void {
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

  showButton(index: number) {
    this.isButtonVisible[index] = true;
  }

  hideButton(index: number) {
    this.isButtonVisible[index] = false;
  }

  adicionar() {
    // Lógica para adicionar aqui
  }
}
