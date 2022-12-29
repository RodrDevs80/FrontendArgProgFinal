import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  expURL='https://portfoliowebsertec-rodrdevs80.koyeb.app/explab/'
  constructor(private httpClient:HttpClient,private router:Router) { }

  public lista():Observable<Experiencia[]>{
   return this.httpClient.get<Experiencia[]>(this.expURL+'lista');
  }
  public detail(id:number):Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.expURL+ `detail/${id}`)
  }

  public save(experiencia:Experiencia):Observable<any>{
   return this.httpClient.post<any>(this.expURL+'create',experiencia);
  }

  public update(id:number,experiencia:Experiencia):Observable<any>{
    return this.httpClient.put<any>(this.expURL+`update/${id}`,experiencia);
  }


  public delete(id:number):Observable<any> {
    return this.httpClient.delete<any>(this.expURL+`delete/${id}`);
  }
}
