import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private httpClient: HttpClient) { }

  private URL ="http://localhost:8888/"; 

  public sendGetRequest(service :string){
    return this.httpClient.get(this.URL+service);
  };

  public sendPostRequest(EndPoint :string, par:any){
    let options={headers:new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')};
    return this.httpClient.post(this.URL+EndPoint,par,options);
  };
}
