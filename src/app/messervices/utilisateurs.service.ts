import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {
  id  ?: number;
  baseURL = "http://localhost:8080/users";
  baseURL2 = "http://localhost:8080/users/id";

  constructor(private httpClient: HttpClient) { }
  getallUsers(): Observable<Utilisateur[]> {

    return this.httpClient.get<Utilisateur[]>(`${this.baseURL}`);

  }
  getId(getId?: number) {
    this.id = getId;
  }

  deletuserbyid(id?: number): Observable<object> {
    if (confirm('Voulez vous vraiement supprimer cet  Utilisateur?')) {
      return this.httpClient.delete<object>(`${this.baseURL2}/${id}`);
      console.log('Thing was saved to the database.');
    } else {
      // Do nothing!
      return this.httpClient.get('baseURL');
      console.log('Thing was not saved to the database.');
    }
  }

  ajoutuser(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.httpClient.post<Utilisateur>(`${this.baseURL}`, utilisateur);
  }

  updateUser(id: number, utilisateur: Utilisateur): Observable<Utilisateur> {
   
      return this.httpClient.put<Utilisateur>(`${this.baseURL2}/${id}`, utilisateur);
    }
    getemployeeById(id?: number){
      const url='http://localhost:8080/users/'
      return this.httpClient.get( url+id);
    }
    updateemployee(id:number , employee : Utilisateur): Observable<Utilisateur>{
      const url='http://localhost:8080/users/majuser/'
    
      return this.httpClient.put<Utilisateur>(url+id, employee);
    
    }
  
}
