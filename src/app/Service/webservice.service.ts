import { Injectable } from '@angular/core';
import { ConnectionService } from './connection.service';
@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  constructor(private connectionService:ConnectionService) {}

  serverData:any=[];
  serverStCl:any=[];
  serverCl:any=[];
  DataZips:any=[];
  mySqlUsers:any=[];
  

  get(service: string){
    this.connectionService.sendGetRequest(service).subscribe(
      (data:any)=>{// se va a buon fine..
        // console.log(data);
        this.serverData=data;
      },
      (error:any)=>{// se non va a buon fine..
        console.log("Errore Get Server Data");
        console.log(error);
      },
    );
  }

  getCl(service: string){
    this.connectionService.sendGetRequest(service).subscribe(
      (data:any)=>{// se va a buon fine..
        // console.log(data);
        this.serverCl=data;
      },
      (error:any)=>{// se non va a buon fine..
        console.log("Errore Get Server Data");
        console.log(error);
      },
    );
  }


  post(service : string ,params:any){
    let par = params;
    this.connectionService.sendPostRequest(service,par).subscribe(
        (data:any)=>{// se va a buon fine..
          console.log(data);
          this.serverData=data;
        },
        (error:any)=>{// se non va a buon fine..
          console.log("Errore esecuzione Web Service Post")
          console.log(error);
        },
    );
  }
  postStCl(service : string ,params:any){
    let par = params;
    this.connectionService.sendPostRequest(service,par).subscribe(
        (data:any)=>{// se va a buon fine..
          console.log(data);
          this.serverStCl=data;
        },
        (error:any)=>{// se non va a buon fine..
          console.log("Errore esecuzione Web Service Post")
          console.log(error);
        },
    );
  }


}
