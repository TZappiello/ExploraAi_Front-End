import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario'
import { UsuarioService } from '../usuario.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  private getUsuarios() {
    this.usuarioService.getUsuariosList().subscribe(data => {
      this.usuarios = data;
    });
  }

  usuarioDetails(id: number) {
    this.router.navigate(['usuario-details', id]);
  }

  updateUsuario(id: number) {
    this.router.navigate(['update-usuario', id]);
  }

  deleteUsuario(id: number) {
    this.usuarioService.deleteUsuario(id).subscribe(data => {
      console.log(data);
      this.getUsuarios();
    })
  }
}
