import { AfterViewInit, Component } from '@angular/core';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-medecins-page',
  templateUrl: './medecins-page.component.html',
  styleUrls: ['./medecins-page.component.css']
})
export class MedecinsPageComponent implements AfterViewInit {

  constructor(public CommunicationService: CommunicationService) { }

    ngAfterViewInit(): void {
      this.CommunicationService.getMedecinData();
  }
}
