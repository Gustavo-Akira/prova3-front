import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Disciplina from './model/disciplina';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {



  constructor(private http: HttpClient) { }

  getAllDisciplinas(): Observable<Disciplina[]>{
    return this.http.get<Disciplina[]>('http://localhost:8080/rest/disciplina');
  }

  getDisciplina(code: string): Observable<Disciplina>{
    return this.http.get<Disciplina>('http://localhost:8080/rest/disciplina/'+code);
  }
}
