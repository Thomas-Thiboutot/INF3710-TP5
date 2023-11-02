import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// import { AppComponent } from "../app.component";
import { MedecinsPageComponent } from "../medecins-page/medecins-page.component";

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'database', component: MedecinsPageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
