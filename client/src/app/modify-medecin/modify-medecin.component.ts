import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service';
import { Medecin } from '../classes/medecin';

@Component({
  selector: 'app-modify-medecin',
  templateUrl: './modify-medecin.component.html',
  styleUrls: ['./modify-medecin.component.css']
})
export class ModifyMedecinComponent implements OnInit {
  medecins: Medecin[] = [];
  selectedMedecin: Medecin | null = null;
  initialMedecin: Medecin | null = null;

  specialites = ['Dermatologie', 'Neurologie', 'Ophtalmologie', 'Orthopédie',
    'Psychiatrie', 'Cardiologie', 'Pédiatrie',
    'Chirurgie', 'Gynécologie', 'Radiologie'];

  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(public CommunicationService: CommunicationService) { }

  ngOnInit(): void {
    this.loadAndSortMedecins();
    this.CommunicationService.getMedecinData();
  }

  onSelectMedecin(id: number): void {
    this.selectedMedecin = this.medecins.find(m => m.idmedecin === id) || null;
    if (this.selectedMedecin) {
      this.initialMedecin = { ...this.selectedMedecin };
    }
  }

  isFormChanged(): boolean {
    return JSON.stringify(this.initialMedecin) !== JSON.stringify(this.selectedMedecin);
  }

  resetForm(): void {
    if (this.selectedMedecin && this.initialMedecin) {
      this.selectedMedecin = { ...this.initialMedecin };
    }
  }

  onSubmit(): void {
    if (this.selectedMedecin) {
      this.CommunicationService.updateMedecin(this.selectedMedecin).subscribe(() => {
        this.updateMedecinsArray();
      },
        error => {
          console.error('Error updating table', error);
        }
      );
    }
  }

  loadAndSortMedecins(): void {
    this.CommunicationService.getMedecin().subscribe(response => {
      const responseBody = response.body;
      if (responseBody) {
        this.medecins = JSON.parse(responseBody);
        this.sortMedecinsById();
      }
    });
  }

  sortMedecinsById(): void {
    this.medecins.sort((a, b) => a.idmedecin - b.idmedecin);
  }

  updateMedecinsArray(): void {
    this.loadAndSortMedecins();
  }

  onChangeSpeciality(event: any) {
    this.specialites.forEach((elem, idx) => {
      if (event.target.value == elem) {
        if (this.selectedMedecin) this.selectedMedecin.idservice = idx;
      }
    })
  };

  onChangeIdService(event: any) {
    this.numbers.forEach((elem, idx) => {
      if (event.target.value == elem) {
        if (this.selectedMedecin) this.selectedMedecin.idservice = idx;
      }
    })
  };
}


