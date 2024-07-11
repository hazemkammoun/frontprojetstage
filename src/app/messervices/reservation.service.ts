import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../reservation';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  id?: number;
  baseURL13 = "http://localhost:8080/reservation";
  baseURL14 = "http://localhost:8080/reservation/id";

  constructor(private httpClient: HttpClient) { }

  getAllreservation(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(`${this.baseURL13}`);
  }

  getId(getId?: number) {
    this.id = getId;
  }

  ajouterreservation(reservation: Reservation): Observable<Reservation> {
    return this.httpClient.post<Reservation>(`${this.baseURL13}`, reservation);
  }

  deletreservationbyid(id?: number): Observable<object> {
    if (confirm('Voulez-vous vraiment supprimer cette réservation?')) {
      return this.httpClient.delete<object>(`${this.baseURL14}/${id}`).pipe(
        catchError(this.handleError)
      );
    } else {
      return this.httpClient.get('baseURL13');
    }
  }

  getreservationbyid(id?: number): Observable<Reservation> {
    const url = 'http://localhost:8080/reservation/';
    return this.httpClient.get<Reservation>(url + id).pipe(
      catchError(this.handleError)
    );
  }

  updatereservation(id: number, reservation: Reservation): Observable<Reservation> {
    const url = 'http://localhost:8080/reservation/majres/';
    return this.httpClient.put<Reservation>(url + id, reservation).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      switch (error.status) {
        case 400:
          errorMessage = 'Bad request. Please check your input.';
          break;
        case 409:
          errorMessage = 'Conflict: La salle est déjà réservée pour cette période.';
          break;
        case 500:
          errorMessage = 'Internal Server Error. Please try again later.';
          break;
        default:
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
    }
    return throwError(errorMessage);
  }
}
