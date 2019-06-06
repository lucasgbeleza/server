import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuncionarioEditComponent } from './funcionario-edit/funcionario-edit.component';
import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/funcionario-list', pathMatch: 'full'},
  {path: 'funcionario-list',component: FuncionarioListComponent},
  {path: 'funcionario-add',component: FuncionarioEditComponent},
  {path: 'funcionario-edit/:id',component: FuncionarioEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
