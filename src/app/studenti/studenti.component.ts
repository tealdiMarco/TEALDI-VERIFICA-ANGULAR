import { Component, OnInit } from '@angular/core';
import { WebserviceService } from '../Service/webservice.service';

@Component({
  selector: 'studenti',
  templateUrl: './studenti.component.html',
  styleUrls: ['./studenti.component.css']
})
export class StudentiComponent implements OnInit{

  listaStu:any[]=[]; 
  listaStCl:any[]=[]; 
  listaClassi:any[]=[]; 
  thing:any=[]; 
  writeResult:boolean=false;
  strWriteResult:string="";

  constructor(public ajaxRequest:WebserviceService){

  }
  

  async ngOnInit(){
        
    this.ajaxRequest.get("api/getStudents");
    
    await this.delay(500);
    this.listaStu = this.ajaxRequest.serverData;
    console.log(this.listaStu);


    this.ajaxRequest.getCl("api/getClasses");
    
    await this.delay(500);
    this.listaClassi = this.ajaxRequest.serverCl;
    console.log(this.listaClassi);
    
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  async showClass(classeA:string){
    this.ajaxRequest.postStCl("api/getStudClass",{classe:classeA});
    
    await this.delay(500);
    this.listaStCl = this.ajaxRequest.serverStCl;
    console.log(this.listaStCl);

    this.listaStu = this.listaStCl;
  }

  showFull(){
    this.listaStu = this.ajaxRequest.serverData;
    // document.querySelector("[name=fruit]:checked").id // plain JS


  }
}
