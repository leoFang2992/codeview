import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'testHttpHeader';
  url:string = 'https://localhost:44324/api/values';
  apiValues: string[]=[];
  private headers: HttpHeaders;
  constructor(private http:HttpClient){
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.get(this.url,{headers:this.headers}).subscribe((values:any)=>{
      this.apiValues = values;
    });
  }

}
