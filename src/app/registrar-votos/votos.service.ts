import { Injectable } from '@angular/core';
import { Votos } from './votos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VotosService {

  private urlEndPoint: string = 'http://localhost:8080/consultar-voto';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getCandidatos(): Observable<Votos[]> {
    //return of(Candidatos);
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Votos[])
    );
  }

  create(data: any) : Observable<any> {
    return this.http.post(`http://localhost:8080/crear-voto`, data, {headers: this.httpHeaders})
  }
}
