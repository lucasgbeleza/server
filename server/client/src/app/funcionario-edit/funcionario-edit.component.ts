import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from '../shared/funcionario/funcionario.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-funcionario-edit',
  templateUrl: './funcionario-edit.component.html',
  styleUrls: ['./funcionario-edit.component.css']
})
export class FuncionarioEditComponent implements OnInit, OnDestroy {
  
  funcionario: any = {};
  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private funcionarioService: FuncionarioService) { }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if(id){
        this.funcionarioService.get(id).subscribe((funcionario:any) => {
          if(funcionario) {
            this.funcionario = funcionario;
            this.funcionario.href = funcionario._links.self.href;
          } else {
            console.log(`Funcionario com o id: ${id} não encontrado, retornando pra lista`);
            this.gotoList();
          }
        });
      }
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
  gotoList() {
    this.router.navigate(['/funcionario-list']);
  }
  save(form: NgForm) {
    this.funcionarioService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.funcionarioService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }



}
