import { Component, AfterViewInit} from '@angular/core';
import { Medecin } from '../classes/medecin';
import { CommunicationService } from '../services/communication.service';
@Component({
  selector: 'app-insert-medecin-form',
  templateUrl: './insert-medecin-form.component.html',
  styleUrls: ['./insert-medecin-form.component.css']
})
export class InsertMedecinFormComponent implements AfterViewInit{
  existingIDs : string[] = [];
  constructor(public CommunicationService: CommunicationService) {}

  specialites = ['Dermatologie','Neurologie', 'Ophtalmologie', 'Orthopédie',
   'Psychiatrie', 'Cardiologie', 'Pédiatrie',
    'Chirurgie', 'Gynécologie', 'Radiologie'];

  model = new Medecin('12', 'Martin', 'Tremblay', 'Dermatologie', 10, 3);

  submitted = false;

  OnSubmit() {
    this.submitted = true;
  }

  ngAfterViewInit() {
   this.CommunicationService.getMedecin().subscribe((data)=>{
    console.log(JSON.parse(data.body!).map((id:Medecin)=> id.idmedecin));
    if(data.body)
      this.existingIDs = JSON.parse(data.body).map((id:Medecin)=> id.idmedecin);
    });

  }

  checkID(){
    let isvalid = true;
    for(let i in this.existingIDs) {
      if (this.model.idmedecin == i)
        isvalid = false;
    }
    return isvalid;
  }
}
