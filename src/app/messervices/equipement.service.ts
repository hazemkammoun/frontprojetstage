import { Injectable } from '@angular/core';
import { Equipement } from '../equipement';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipementService {
  id  ?: number;
  baseURL11 = "http://localhost:8080/equipement";
  baseURL12 = "http://localhost:8080/equipement/id";
  constructor(private httpClient: HttpClient) { }

  getAllequipement(): Observable<Equipement[]> {
    return this.httpClient.get<Equipement[]>(`${this.baseURL11}`);
  }

  
  getId(getId?: number) {
    this.id = getId;


  }
  ajouterequipement(Equipement: Equipement): Observable<Equipement> {
    return this.httpClient.post<Equipement>(`${this.baseURL11}`, Equipement);
  }

  deletequipementbyid(id?: number): Observable<object> {
    if (confirm('Voulez vous vraiement supprimer cet Equipement?')) {
      return this.httpClient.delete<object>(`${this.baseURL12}/${id}`);
      console.log('Thing was saved to the database.');
    } else {
      // Do nothing!
      return this.httpClient.get('baseURL12');
      console.log('Thing was not saved to the database.');
    }
  }
  getequipementbyid(id?: number){
    const url='http://localhost:8080/equipement/'
    return this.httpClient.get( url+id);
  }
  updateequipement(id:number , Equipement : Equipement): Observable<Equipement>{
    const url='http://localhost:8080/equipement/majequip/'
    console.log("service updateequipement contacté  ");
  
    return this.httpClient.put<Equipement>(url+id, Equipement);
  
  }
}
