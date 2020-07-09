
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
//mport { Legajo } from './legajo';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  env: any = environment;

  constructor(private http: HttpClient) { }



  public getLegajos = (): Observable<Object> => {

    return this.http.get(this.env.api_base+ 'legajos');
  };

  public getLegajo = (id:string): Observable<Object> => {

    return this.http.get(this.env.api_base+ 'legajos/'+id);
  };

  public updateLegajo = (legajo: object): Observable<Object> => {
    return this.http.put(this.env.api_base+ 'legajos',legajo,{headers:{'Content-Type':'application/json'}});
  };

  public insertLegajo = (legajo: object): Observable<Object> => {
    return this.http.post(this.env.api_base+ 'legajos',legajo,{headers:{'Content-Type':'application/json'}});
  };

  public deleteLegajo = (id:string): Observable<Object> => {
    //let token:any = localStorage.getItem("token");
    //return this.http.delete(this.env.api_base+ 'legajos/'+id,{headers:{'token':token}});
    return this.http.delete(this.env.api_base+ 'legajos/'+id);
  };

  public login = (email:string,password:string): Observable<object> =>{
    return this.http.post(this.env.api_base+ 'login',{"email":email,"password":password},{headers:{'Content-Type':'application/json'}});
  }

}