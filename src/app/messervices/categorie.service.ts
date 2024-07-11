import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from '../categorie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
    id  ?: number;
    baseURL9 = "http://localhost:8080/categorie";
    baseURL10 = "http://localhost:8080/categorie/id";



  constructor(private httpClient: HttpClient) { }
  getAllcategorie(): Observable<Categorie[]> {
    return this.httpClient.get<Categorie[]>(`${this.baseURL9}`);
  }
  
  getId(getId?: number) {
    this.id = getId;


  }

  
  ajoutercategorie(Categorie: Categorie): Observable<Categorie> {
    return this.httpClient.post<Categorie>(`${this.baseURL9}`, Categorie);
  }

  deletcategoriebyid(id?: number): Observable<object> {
    if (confirm('Voulez vous vraiement supprimer cet Catégorie?')) {
      return this.httpClient.delete<object>(`${this.baseURL10}/${id}`);
      console.log('Thing was saved to the database.');
    } else {
      // Do nothing!
      return this.httpClient.get('baseURL9');
      console.log('Thing was not saved to the database.');
    }


  }
  getcategoriebyid(id?: number){
    const url='http://localhost:8080/categorie/'
    return this.httpClient.get( url+id);
  }
  updatecategorie(id:number , categorie : Categorie): Observable<Categorie>{
    const url='http://localhost:8080/categorie/majcat/'
    console.log("service updatecategorie contacté  ");
  
    return this.httpClient.put<Categorie>(url+id, categorie);
  
  }
}
