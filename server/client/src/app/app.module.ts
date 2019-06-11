import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component';
import { MatButtonModule, MatCardModule, MatInputModule, MatToolbarModule, MatCard, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FuncionarioEditComponent } from './funcionario-edit/funcionario-edit.component';
import { FormsModule } from '@angular/forms';
import { XseedComponent } from './xseed/xseed.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    FuncionarioListComponent,
    FuncionarioEditComponent,
    XseedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
