import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: ['./create-usuario.component.css']
})
export class CreateUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();
  constructor(private usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveUsuario() {
    this.usuarioService.createUsuario(this.usuario).subscribe(data => {
      console.log(data);
      this.goToUsuarioList();
    },
      error => console.log(error));
  }

  goToUsuarioList() {
    this.router.navigate(['/usuarios']);
  }

  onSubmit() {
    console.log(this.usuario);
    if (this.usuario.email != null && this.usuario.nome != null && this.usuario.senha != null) {
      this.saveUsuario();
    }
    else if (this.usuario.email != null && this.usuario.nome != null && this.usuario.senha == null) {
      alert("Senha: " + this.usuario.senha + " | ==>> Campo(s) Inválido(s)!");
    }
    else if (this.usuario.nome == null && this.usuario.email != null && this.usuario.senha != null) {
      alert("Nome: " + this.usuario.nome + " | ==>> Campo(s) Inválido(s)!");
    }
    else if (this.usuario.nome == null && this.usuario.senha == null && this.usuario.email != null) {
      alert("Nome: " + this.usuario.nome + " | Senha: " + this.usuario.senha + " | ==>> Campo(s) Inválido(s)!");
    }
    else if (this.usuario.nome != null && this.usuario.senha != null && this.usuario.email == null) {
      alert("Email: " + this.usuario.email + " | ==>> Campo(s) Inválido(s)!");
    }
    else if (this.usuario.email == null && this.usuario.nome != null && this.usuario.senha == null) {
      alert("Email: " + this.usuario.email + " | Senha: " + this.usuario.senha + " | ==>> Campo(s) Inválido(s)!");
    }
    else if (this.usuario.senha != null && this.usuario.email == null && this.usuario.nome == null) {
      alert("Email: " + this.usuario.email + "| Nome: " + this.usuario.nome + " | ==>> Campo(s) Inválido(s)!");
    }
    else if (this.usuario.email == null && this.usuario.nome == null && this.usuario.senha == null) {
      alert("Nome: " + this.usuario.nome + " | Email: " + this.usuario.email + " | Senha: " + this.usuario.senha + " | ==>> Campo(s) Inválido(s)!");
    }
  }
}
