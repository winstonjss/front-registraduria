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

  create(data: any) : Observable<any> {
    return this.http.post(`http://localhost:8080/crear-candidato`, data, {headers: this.httpHeaders})
  }
  update(data: any): Observable<any>{
    return this.http.post(`http://localhost:8080/editar-candidato`, data, {headers: this.httpHeaders})
  }
  deleteCandidato(id: number): Observable<any> {
    return this.http.get(`http://localhost:8080/eliminar-candidato?cedula=${id}`,{headers: this.httpHeaders});
  }

}
