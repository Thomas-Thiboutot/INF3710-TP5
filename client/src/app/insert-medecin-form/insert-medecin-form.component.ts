import { Component, AfterViewInit} from '@angular/core';
import { Medecin } from '../classes/medecin';
import { CommunicationService } from '../services/communication.service';
@Component({
  selector: 'app-insert-medecin-form',
  templateUrl: './insert-medecin-form.component.html',
  styleUrls: ['./insert-medecin-form.component.css']
})
export class InsertMedecinFormComponent implements AfterViewInit{
  existingIDs : number[] = [];
  isvalid: boolean = true;
  constructor(public CommunicationService: CommunicationService) {}

  specialites = ['Dermatologie','Neurologie', 'Ophtalmologie', 'Orthopédie',
   'Psychiatrie', 'Cardiologie', 'Pédiatrie',
    'Chirurgie', 'Gynécologie', 'Radiologie'];

  numbers = [0,1,2,3,4,5,6,7,8,9];

  model = new Medecin(12, 'Martin', 'Tremblay', 'Dermatologie', 10, 0);

  OnSubmit() {
    console.log(this.model.idservice);
      this.CommunicationService.insertNewMedecin(this.model).subscribe();
  }

  ngAfterViewInit() {
   this.CommunicationService.getMedecin().subscribe((data)=>{
    if(data.body)
      this.existingIDs = JSON.parse(data.body).map((id:Medecin)=> id.idmedecin);
    });
  }

  onChangeID(event: any){
    this.isvalid = true;
    for(let i of this.existingIDs) {
      if (event.target.value == Number(i))
        this.isvalid = !this.isvalid;
    }
  }

}
