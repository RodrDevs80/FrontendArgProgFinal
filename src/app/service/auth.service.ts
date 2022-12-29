import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL="https://portfoliowebsertec-rodrdevs80.koyeb.app/auth/";

  constructor(private httpcliente: HttpClient) {}


  public nuevo(nuevoUsuario: NuevoUsuario):Observable<any> {
    return this.httpcliente.post<any>(this.authURL+ "nuevo", nuevoUsuario);
  }

  public login(loginUsuario:LoginUsuario):Observable<JwtDto> {
    return this.httpcliente.post<JwtDto>(this.authURL+"login",loginUsuario);
  }
}
