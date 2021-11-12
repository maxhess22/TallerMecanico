import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Agenda {
  _idAgendad: number;
  horario: string;
  fecha: Date;
  marca: string;
  modelo: string;
  kilometraje: number;
}

@Injectable({
  providedIn: 'root'
})
export class AgendaCrudService {
  endpoint = 'https://serviexpress.pythonanywhere.com/api/agenda/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token beeb2c58df0f77b3ddd68e7ef1133a18995966d3' })
  };
  constructor(private httpClient: HttpClient) { }

  createAgenda(agenda: Agenda): Observable<any> {
    return this.httpClient.post<Agenda>(this.endpoint, JSON.stringify(agenda), this.httpOptions)
      .pipe(
        catchError(this.handleError<Agenda>('Error occured'))
      );
  }

  getAgenda(): Observable<Agenda[]> {
    return this.httpClient.get<Agenda[]>(this.endpoint + '/' , this.httpOptions)
      .pipe(
        tap(_ => console.log(`Agenda fetched: `)),
        catchError(this.handleError<Agenda[]>(`Get Agenda `))
      );
  }

  deleteAgenda(id): Observable<Agenda[]> {
    return this.httpClient.delete<Agenda[]>(this.endpoint + '/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Agenda deleted: ${id}`)),
        catchError(this.handleError<Agenda[]>('Delete Agenda'))
      );
  }

}
