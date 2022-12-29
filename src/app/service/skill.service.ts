import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  URL: string = 'https://portfoliowebsertec-rodrdevs80.koyeb.app/skills/';

  constructor(private httpclient: HttpClient) {}

  public lista(): Observable<Skill[]> {
    return this.httpclient.get<Skill[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Skill> {
    return this.httpclient.get<Skill>(this.URL + `detail/${id}`);
  }

  public save(skill: Skill): Observable<any> {
    return this.httpclient.post<any>(this.URL + 'create', skill);
  }

  public update(id: number, skill: Skill): Observable<any> {
    return this.httpclient.put<any>(this.URL + `update/${id}`, skill);
  }

  public delete(id: number): Observable<any> {
    return this.httpclient.delete<any>(this.URL + `delete/${id}`);
  }
}
