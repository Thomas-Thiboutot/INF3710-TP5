import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./modules/app-routing.module";
import { AppComponent } from "./app.component";
import { CommunicationService } from "./services/communication.service";
import { AppMaterialModule } from './modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MedecinsPageComponent } from './medecins-page/medecins-page.component';
import { InsertMedecinFormComponent } from './insert-medecin-form/insert-medecin-form.component';
import { SubmittedFormComponent } from './submitted-form/submitted-form.component';
import { ModifyMedecinComponent } from './modify-medecin/modify-medecin.component';

@NgModule({
  declarations: [
    AppComponent,
    MedecinsPageComponent,
    InsertMedecinFormComponent,
    SubmittedFormComponent,
    ModifyMedecinComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppMaterialModule
  ],
  providers: [CommunicationService],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
