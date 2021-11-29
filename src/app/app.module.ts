import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { CreateUsuarioComponent } from './create-usuario/create-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateUsuarioComponent } from './update-usuario/update-usuario.component';
import { UsuarioDetailsComponent } from './usuario-details/usuario-details.component'
import { HomeComponent } from './home/home.component';
import { Page401Component } from './page401/page401.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioListComponent,
    CreateUsuarioComponent,
    UpdateUsuarioComponent,
    UsuarioDetailsComponent,
    HomeComponent,
    Page401Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
