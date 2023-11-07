// À DÉCOMMENTER ET À UTILISER LORSQUE VOTRE COMMUNICATION EST IMPLÉMENTÉE
// import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, map } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Medecin } from "../classes/medecin";

@Injectable()
export class CommunicationService {
  // À DÉCOMMENTER ET À UTILISER LORSQUE VOTRE COMMUNICATION EST IMPLÉMENTÉE
  // private readonly BASE_URL: string = "http://localhost:3000/database";
  // public constructor(private readonly http: HttpClient) {}
  existingIDs:string[] = [];
  medecins_column_name: string[] = [];
  medecins_row_data = [];
  private _listeners: any = new Subject<any>();
  private readonly baseUrl: string = 'http://localhost:3000';
  constructor(private readonly http: HttpClient){}

  listen(): Observable<any> {
    return this._listeners.asObservable();
  }

  filter(filterBy: string): void {
    this._listeners.next(filterBy);
  }

  async getMedecinData() {
    this.getMedecin().subscribe((medecins: any)=>{
      this.medecins_row_data = JSON.parse(medecins.body);
      this.medecins_column_name = Object.keys((JSON.parse(medecins.body))[0]);
  })
}

  getMedecin() {
    return this.http
    .get(`${this.baseUrl}/database`, { observe: 'response', responseType: 'text' });
  }

  insertNewMedecin(model: Medecin) {
    console.log(model);
    return this.http.post(`${this.baseUrl}/database`, model, { observe: 'response', responseType: 'text' })
    .pipe(map((res) => res.status === 201));
  }

  // À DÉCOMMENTER ET À UTILISER LORSQUE VOTRE COMMUNICATION EST IMPLÉMENTÉE
  // private handleError<T>(
  //   request: string,
  //   result?: T
  // ): (error: Error) => Observable<T> {
  //   return (error: Error): Observable<T> => {
  //     return of(result as T);
  //   };
  // }
}
