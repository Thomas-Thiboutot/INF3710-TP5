// À DÉCOMMENTER ET À UTILISER LORSQUE VOTRE COMMUNICATION EST IMPLÉMENTÉE
// import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommunicationService {
  // À DÉCOMMENTER ET À UTILISER LORSQUE VOTRE COMMUNICATION EST IMPLÉMENTÉE
  // private readonly BASE_URL: string = "http://localhost:3000/database";
  // public constructor(private readonly http: HttpClient) {}
  existingIDs:string[] = [];
  medecins_column_name = [];
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

  //getMedecins() {
  //  this.http.get(`${this.baseUrl}/database`).subscribe((medecins: any) => {
  //    this.medecins_row_data = JSON.parse(JSON.stringify(medecins.rows));
  //    const fields = JSON.parse(JSON.stringify(medecins.fields));
  //    this.medecins_column_name = fields.map((obj : any) => obj.name);
  //    this.existingIDs = this.medecins_row_data.map((medecin_data : Medecin)=> medecin_data.idmedecin);
  //  });
  //}

  getMedecin() {
    return this.http
    .get(`${this.baseUrl}/database`, { observe: 'response', responseType: 'text' });
  }
  //getIDs(): Observable<number[]> {
  //  return this.http
  //          .get(`${this.baseUrl}/database/id`, { observe: 'body', responseType: 'text' })
  //          .pipe(map((body: any) => JSON.parse(body)));
  //}
//
  //async getValidIDs() {
  //  this.getIDs().subscribe((ids)=> {
  //    this.existingIDs = ids;
  //  });
//
  //  console.log(this.existingIDs);
  //}


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
