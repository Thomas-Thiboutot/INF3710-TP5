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

  getMedecins() {
    this.http.get(`${this.baseUrl}/database`).subscribe((medecins: any) => {
      console.log(medecins);
      this.medecins_row_data = JSON.parse(JSON.stringify(medecins.rows));
      const fields = JSON.parse(JSON.stringify(medecins.fields));
      this.medecins_column_name = fields.map((obj : any) => obj.name);
    });
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
