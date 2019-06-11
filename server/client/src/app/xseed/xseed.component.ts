import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-xseed',
  templateUrl: './xseed.component.html',
  styleUrls: ['./xseed.component.css']
})
export class XseedComponent implements OnInit {
  @Input() teste= "";
  url = '//localhost:8080';
  funcionarios: Array<any>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.capitalize().subscribe(data =>{
      this.funcionarios = data;
    })  
  }

  capitalize(): Observable<any>{
    let result: Observable<Object>;
    result = this.http.get(this.url + '/cool-funcionarios');
    return result;
  }
}
