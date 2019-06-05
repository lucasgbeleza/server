import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) {}

  // url: string = "//localhost:8080/cool-funcionarios";

  getAll(): Observable<any> {
    return this.http.get('//' + window.location.hostname + ':8080/cool-funcionarios');
    }
}
