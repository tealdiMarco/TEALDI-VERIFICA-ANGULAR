import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { StudentiComponent } from './studenti/studenti.component';
import { InserisciComponent } from './inserisci/inserisci.component';


const routes: Routes = [ //qua ci sono tutti i percorsi che il sito segue che portano ad altre pagine 
  {path:"", component: StudentiComponent}, //! quando non c'e nulla nel path lo mandi al component login
  {path:"inserisci", component:InserisciComponent},
  {path:"**", component:PageNotFoundComponentComponent }// ** = quando la route che cerco non esiste
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
