import { Injectable } from '@angular/core';
import { Candidatos } from './candidatos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class CandidatosService {
  private urlEndPoint: string = 'http://localhost:8080/consutar-candidatos';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getCandidatos(): Observable<Candidatos[]> {
    //return of(Candidatos);
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Candidatos[])
    );
  }
/*
  create(candidato: Candidatos) : Observable<Candidatos> {
    return this.http.post<Candidatos>(this.urlEndPoint, candidato, {headers: this.httpHeaders})
  }

  getCliente(id): Observable<Candidatos>{
    return this.http.get<Candidatos>(`${this.urlEndPoint}/${id}`)
  }



  delete(id: number): Observable<Candidatos>{
    return this.http.delete<Candidatos>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }
*/
}
