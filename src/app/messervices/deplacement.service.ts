import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deplacement } from '../Deplacement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeplacementService {
  URL = "http://localhost:8080/deplacement";

  constructor(private http:HttpClient) { }
  getAlldepl(): Observable<Deplacement[]> {
    return this.http.get<Deplacement[]>(`${this.URL}`+"/Listdeplacement");
  }
 adddepl(Deplacement:Deplacement): Observable<Deplacement> {
    return this.http.post<Deplacement>(`${this.URL}`+"/adddeplacement",Deplacement);
  }

}
