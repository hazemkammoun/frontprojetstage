import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Salle } from '../salle';

@Injectable({
  providedIn: 'root'
})
export class SalleService {
  id  ?: number;
  baseURL7 = "http://localhost:8080/salles";
  baseURL8 = "http://localhost:8080/salles/id";

  constructor(private httpClient: HttpClient) { }
  getAllsalle(): Observable<Salle[]> {
    return this.httpClient.get<Salle[]>(`${this.baseURL7}`);
  }
  getId(getId?: number) {
    this.id = getId;


  }

  ajoutersalle(Salle: Salle): Observable<Salle> {
    return this.httpClient.post<Salle>(`${this.baseURL7}`, Salle);
  }

  deletsallebyid(id?: number): Observable<object> {
    if (confirm('Voulez vous vraiement supprimer cet Salle?')) {
      return this.httpClient.delete<object>(`${this.baseURL8}/${id}`);
      console.log('Thing was saved to the database.');
    } else {
      // Do nothing!
      return this.httpClient.get('baseURL7');
      console.log('Thing was not saved to the database.');
    }
  }
  getsallebyid(id?: number){
    const url='http://localhost:8080/salles/'
    return this.httpClient.get( url+id);
  }
  updatesalle(id:number , Salle : Salle): Observable<Salle>{
    const url='http://localhost:8080/salles/majsalle/'
    console.log("service updatedirection contacté  ");
  
    return this.httpClient.put<Salle>(url+id, Salle);
  
  }
}
