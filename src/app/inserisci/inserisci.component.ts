import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms'; //si creano da soli il form
import { WebserviceService } from '../Service/webservice.service';

@Component({
  selector: 'inserisci',
  templateUrl: './inserisci.component.html',
  styleUrls: ['./inserisci.component.css']
})
export class InserisciComponent {
  
  reactiveForm:FormGroup;
  mail:string="";
  arrayCars:any[]=[];

  login:boolean=true;
  registration:boolean=false;
  car_show:boolean=false;
  pError:boolean=false;

  
  
  
  constructor(private formBuilder:FormBuilder){
    this.reactiveForm=this.formBuilder.group({ // form Composto da:
      nome:[
        '',
        [
          
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15)
          
        ],
      ],
      cognome:[
        '',
        [
          
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15)
          
        ],
      ],
      classe:[
        '',
        [
          
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(6)
          
        ],
      ],
      indirizzo:[
        '',
        [
          
          Validators.required,
          Validators.minLength(7)
          
        ],
      ],
      citta:[
        '',
        [
          
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(26)
          
        ],
      ],
      
      
    });
  }

  async confirm(){

    

    // let info ={
    //   cod_fiscale:this.reactiveForm.controls['cod_fiscale'].value,
    //   mail:this.reactiveForm.controls['mail'].value,
    //   password:this.reactiveForm.controls['password'].value,
    //   cognome:this.reactiveForm.controls['cognome'].value,
    //   nome:this.reactiveForm.controls['nome'].value,
    //   indirizzo:this.reactiveForm.controls['indirizzo'].value,

    // }

    let busta = await fetch("http://localhost:8888/api/insertStud", 
    {
      "method":"POST",
      "headers":{"Content-Type":"application/x-www-form-urlencoded"},
      "body": JSON.stringify({
        cognome:this.reactiveForm.controls['cognome'].value,
        nome:this.reactiveForm.controls['nome'].value,
        classe:this.reactiveForm.controls['classe'].value,
        indirizzo:this.reactiveForm.controls['indirizzo'].value,
        citta:this.reactiveForm.controls['citta'].value,
      })
    });

    let risposta = await busta.json()
    console.log(risposta);
  }

}
