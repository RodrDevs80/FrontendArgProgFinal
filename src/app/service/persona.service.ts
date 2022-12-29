import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  URL = 'https://portfoliowebsertec-rodrdevs80.koyeb.app/personas/';

  constructor(private httpclient: HttpClient) {}

  public lista(): Observable<persona[]> {
    return this.httpclient.get<persona[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<persona> {
    return this.httpclient.get<persona>(this.URL + `detail/${id}`);
  }

  public save(per: persona): Observable<any> {
    return this.httpclient.post<any>(this.URL + 'create', per);
  }

  public update(id: number, per: persona): Observable<any> {
    return this.httpclient.put<any>(this.URL + `update/${id}`, per);
  }

  public delete(id: number): Observable<any> {
    return this.httpclient.delete<any>(this.URL + `delete/${id}`);
  }
}
