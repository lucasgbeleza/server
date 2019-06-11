import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../shared/funcionario/funcionario.service';

@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.css']
})

export class FuncionarioListComponent implements OnInit {

  funcionarios: Array<any>;

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit() {
    this.funcionarioService.getAll().subscribe(data =>{
      this.funcionarios = data;
      console.log(data);
    });
  }

}
