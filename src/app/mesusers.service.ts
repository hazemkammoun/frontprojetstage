import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Leservice } from './Leservice';
import { Direction } from './direction';


@Injectable({
  providedIn: 'root'
})
export class MesusersService {
  id?: number;
  baseURL3 = "http://localhost:8080/services";
  baseURL4 = "http://localhost:8080/directions";
  baseURL5 = "http://localhost:8080/directions/id";
  baseURL6 = "http://localhost:8080/services/id";
  
  constructor(private httpClient: HttpClient) { }
  getAllServices(): Observable<Leservice[]> {
    return this.httpClient.get<Leservice[]>(`${this.baseURL3}`);

  }
  ajouterservice(Leservice: Leservice): Observable<Leservice> {
    return this.httpClient.post<Leservice>(`${this.baseURL3}`, Leservice);
  }
  deletservicebyid(id?: number): Observable<object> {
    if (confirm('Voulez vous vraiement supprimer cet Service?')) {

    return this.httpClient.delete<object>(`${this.baseURL6}/${id}`);
    console.log('Thing was saved to the database.');
  } else {
    // Do nothing!
    return this.httpClient.get('baseURL3');
        console.log('Thing was not saved to the database.');
        } 
  }

  getServbyId(id?: number){
    const url='http://localhost:8080/services/'
    return this.httpClient.get( url+id);
  }
  updateservice(id:number , service : Leservice): Observable<Leservice>{
    const url='http://localhost:8080/services/majserv/'
  
    return this.httpClient.put<Leservice>(url+id, service);
  
  }


  getAlldirection(): Observable<Direction[]> {
    return this.httpClient.get<Direction[]>(`${this.baseURL4}`);
  }

  ajouterdirec(direction: Direction): Observable<Direction> {
    return this.httpClient.post<Direction>(`${this.baseURL4}`, direction);
  }

  deletdirecbyid(id?: number): Observable<object> {
    if (confirm('Voulez vous vraiement supprimer cet Direction?')) {
    return this.httpClient.delete<object>(`${this.baseURL5}/${id}`);
    console.log('Thing was saved to the database.');
  } else {
    // Do nothing!
    return this.httpClient.get('baseURL4');
        console.log('Thing was not saved to the database.');
        }     
  }
  updateDirec(id: number, direction: Direction): Observable<Direction> {
   
    return this.httpClient.put<Direction>(`${this.baseURL4}/${id}`, direction);
  }

  getDirecbyId(id?: number){
    const url='http://localhost:8080/directions/'
    return this.httpClient.get( url+id);
  }
  updatedirection(id:number , direction : Direction): Observable<Direction>{
    const url='http://localhost:8080/directions/majdirec/'
    console.log(direction);
  
    return this.httpClient.put<Direction>(url+id, direction);
  
  }

  getId(getId?: number) {
    this.id = getId;
  }

  
}
