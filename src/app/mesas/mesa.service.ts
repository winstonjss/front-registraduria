import { Injectable } from '@angular/core';
import { Mesas } from './mesa';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MesaService {
  private urlEndPoint: string = 'http://localhost:8080/consutar-mesa';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getCandidatos(): Observable<Mesas[]> {
    //return of(Candidatos);
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Mesas[])
    );
  }

  create(data: any) : Observable<any> {
    return this.http.post(`http://localhost:8080/crear-mesa`, data, {headers: this.httpHeaders})
  }
  update(data: any): Observable<any>{
    return this.http.post(`http://localhost:8080/editar-mesa`, data, {headers: this.httpHeaders})
  }
  deleteCandidato(id: number): Observable<any> {
    return this.http.get(`http://localhost:8080/eliminar-mesa?numeroMesa=${id}`,{headers: this.httpHeaders});
  }

}
