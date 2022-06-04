import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Falta } from '../model/falta';
import { Observable } from 'rxjs';
import FaltaUdf from '../model/faltaudf';
import FaltaSave from '../model/faltasave';
@Injectable({
  providedIn: 'root'
})
export class FaltaServiceService {
  private baseUrl: string = 'http://localhost:8080/rest/falta';
  constructor(private http: HttpClient) { }

  /**
   * getFaltasByUDF
   */
  public getFaltasByUDF(code: string): Observable<FaltaUdf[]>{
    return this.http.get<FaltaUdf[]>(this.baseUrl+'/relatorio/'+code);
  }

 public saveFaltas(faltas:FaltaSave[]): Observable<Falta[]>{
   let json = JSON.stringify(faltas);
   const headers = { 'Content-Type': 'application/json' };
   console.log(json);
   return this.http.post<Falta[]>(this.baseUrl,json,{headers:headers});
 }

 public updateFaltas(id: number,falta: Falta): Observable<Falta> {
   return this.http.put<Falta>(this.baseUrl+'/'+id,JSON.stringify(falta));
 }
}
