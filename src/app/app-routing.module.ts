import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { CreateUsuarioComponent } from './create-usuario/create-usuario.component';
import { UpdateUsuarioComponent } from './update-usuario/update-usuario.component';
import { UsuarioDetailsComponent } from './usuario-details/usuario-details.component';
import { HomeComponent } from './home/home.component';
import { Page401Component } from './page401/page401.component';



const routes: Routes = [
  {path: 'usuarios', component: UsuarioListComponent},
  {path: 'create-usuario', component: CreateUsuarioComponent},
  {path: '', redirectTo: 'usuarios', pathMatch: 'full'},
  {path: 'update-usuario/:id', component: UpdateUsuarioComponent},
  {path: 'usuario-details/:id', component: UsuarioDetailsComponent},
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path: '**',component:Page401Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
