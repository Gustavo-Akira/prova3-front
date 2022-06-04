import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Matricula from './model/matricula';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {
  private baseUrl:string = 'http://localhost:8080/rest/matricula';
  constructor(private http: HttpClient) { }

  getMatriculas(code:string): Observable<Matricula[]>{
    return this.http.get<Matricula[]>(this.baseUrl+'/lista/'+code);
  }
}
