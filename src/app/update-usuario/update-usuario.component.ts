import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-usuario',
  templateUrl: './update-usuario.component.html',
  styleUrls: ['./update-usuario.component.css']
})
export class UpdateUsuarioComponent implements OnInit {

  id: number;
  usuario: Usuario = new Usuario();
  constructor(private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.usuarioService.getUsuarioById(this.id).subscribe(data => {
      this.usuario = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.usuarioService.updateUsuario(this.id, this.usuario).subscribe(data => {
      this.goToUsuarioList();
    }
      , error => console.log(error));
  }

  goToUsuarioList() {
    this.router.navigate(['/usuarios']);
  }
}
