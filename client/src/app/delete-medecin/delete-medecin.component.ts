import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service';
import { Medecin } from '../classes/medecin';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-delete-medecin',
  templateUrl: './delete-medecin.component.html',
  styleUrls: ['./delete-medecin.component.css']
})
export class DeleteMedecinComponent implements OnInit {
  medecins: Medecin[] = [];
  selectedMedecin: Medecin | null = null;

  constructor(public CommunicationService: CommunicationService) { }

  ngOnInit(): void {
    this.loadAndSortMedecins();
    this.CommunicationService.getMedecinData();
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

  async deleteMedecin() {
    if (this.selectedMedecin) {
      await firstValueFrom(this.CommunicationService.deleteMedecin(this.selectedMedecin.idmedecin));
      this.loadAndSortMedecins();
    }
  }

  onSelectMedecin(id: number): void {
    this.selectedMedecin = this.medecins.find(m => m.idmedecin === id) || null;
    this.deleteMedecin();
  }

}
