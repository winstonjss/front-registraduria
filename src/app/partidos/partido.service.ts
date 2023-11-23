import { Injectable } from '@angular/core';
import { Partidos } from './partidos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PartidoService {

  private urlEndPoint: string = 'http://localhost:8080/consutar-partidos';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  get(): Observable<Partidos[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Partidos[])
    );
  }

  create(data: any) : Observable<any> {
    return this.http.post(`http://localhost:8080/crear-partido`, data, {headers: this.httpHeaders})
  }
  update(data: any): Observable<any>{
    return this.http.post(`http://localhost:8080/editar-partido`, data, {headers: this.httpHeaders})
  }
  deleteCandidato(id: number): Observable<any> {
    return this.http.get(`http://localhost:8080/eliminar-partido?numeroPartido=${id}`,{headers: this.httpHeaders});
  }
}
