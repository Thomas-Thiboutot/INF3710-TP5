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

  model = new Medecin(12, 'Martin', 'Tremblay', 'Dermatologie', 10, 0);

  OnSubmit() {
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

  onChange(event: any) {
    this.specialites.forEach((elem, idx) => {
      if(event.target.value == elem) {
          this.model.idservice = idx;
      }
  })};
}
