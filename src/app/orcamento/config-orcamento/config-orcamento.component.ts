import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ReactiveFormsModule, FormsModule, FormGroup,FormBuilder,Validators  } from '@angular/forms';


@Component({
  selector: 'app-config-orcamento',
  standalone: true,
  imports: [FieldsetModule,FloatLabelModule,InputTextModule, CheckboxModule,DropdownModule,
    RadioButtonModule,ReactiveFormsModule,FormsModule,CommonModule
  ],
  templateUrl: './config-orcamento.component.html',
  styleUrl: './config-orcamento.component.scss'
})
export class ConfigOrcamentoComponent implements OnInit {

  formGroup!: FormGroup;
  formBuilder : FormBuilder = new FormBuilder();

  categories: any[] = [
      { name: 'Arredontar em 2 casas decimais', key: 'A' },
      { name: 'Arredontar em 2 casas decimais incluindo as composições auxiliares', key: 'M' },
      { name: 'Arredontar em 2 casas decimais e truncar os preços unitarios', key: 'P' },
      { name: 'Arredontar tudo  em 2 casas decimais (Padrão TCU)', key: 'R' },
      { name: 'Não arrendondar', key: 'N' }
    ];


  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      codigo: ['', Validators.required], // Código obrigatório
      descricao: ['', Validators.required], // Descrição obrigatória
      auto: [false],
      city: [false],
      permitir: [false],
      estado: ['', Validators.required], // Estado obrigatório
      dataSinapi: ['', Validators.required], // Data SINAPI obrigatória
      cliente: [''],
      selectedCategoryControl: '',
      encargos: [false]
    });
  }
}
