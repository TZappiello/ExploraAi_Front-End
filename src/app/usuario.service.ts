import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseURL = "http://localhost:8080/api/v1/usuarios";

  constructor(private httpClient: HttpClient) { }

  getUsuariosList(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(`${this.baseURL}`);
  }

  createUsuario(usuario: Usuario): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, usuario);
  }

  getUsuarioById(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.baseURL}/${id}`);
  }

  updateUsuario(id: number, usuario: Usuario): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, usuario);
  }

  deleteUsuario(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
