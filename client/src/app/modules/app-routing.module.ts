import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// import { AppComponent } from "../app.component";
import { MedecinsPageComponent } from "../medecins-page/medecins-page.component";
import { InsertMedecinFormComponent } from "../insert-medecin-form/insert-medecin-form.component";
import { ModifyMedecinComponent } from "../modify-medecin/modify-medecin.component";
import { SubmittedFormComponent } from "../submitted-form/submitted-form.component";

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'database', component: MedecinsPageComponent },
  { path: 'insert', component: InsertMedecinFormComponent },
  { path: 'modify', component: ModifyMedecinComponent },
  { path: 'submitted', component: SubmittedFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
