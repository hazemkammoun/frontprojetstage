import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Demande } from '../demande';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  id  ?: number;
  baseURL16 = "http://localhost:8080/demande";
  baseURL17 = "http://localhost:8080/demande/id";
  constructor(private httpClient: HttpClient) { }
  getAllDemande(): Observable<Demande[]> {
    return this.httpClient.get<Demande[]>(`${this.baseURL16}`);
  }

  
  getId(getId?: number) {
    this.id = getId;


  }
  ajouterdemande(Demande: Demande): Observable<Demande> {
    return this.httpClient.post<Demande>(`${this.baseURL16}`, Demande);
  }
  getdemandebyId(id?: number){
    const url='http://localhost:8080/demande/'
    return this.httpClient.get( url+id);
  }

  deletdemandebyId(id?: number): Observable<object> {
    if (confirm('Voulez vous vraiement supprimer cet Demande?')) {
      return this.httpClient.delete<object>(`${this.baseURL16}/${id}`);
      console.log('Thing was saved to the database.');
    } else {
      // Do nothing!
      return this.httpClient.get('baseURL17');
      console.log('Thing was not saved to the database.');
    }
  }

  updatedemande(id:number , Demande : Demande): Observable<Demande>{
    const url='http://localhost:8080/demande/majdemande/'
    console.log("service updatedemande contacté  ");
  
    return this.httpClient.put<Demande>(url+id, Demande);
  
  }
}
