import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  
  public API = '//localhost:8080';
  public FUNC_API = this.API + '/funcionarios';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.API + '/cool-funcionarios');
    }

  get(id:string) {
    return this.http.get(this.FUNC_API + '/' + id);
  }

  save(func: any): Observable<any> {
    let result: Observable<Object>;
    if(func['href']) {
      result = this.http.put(func.href, func);
    } else {
      result = this.http.post(this.FUNC_API, func);
    }
    return result;
  }

  remove(href: string){
    return this.http.delete(href);
  }

}
