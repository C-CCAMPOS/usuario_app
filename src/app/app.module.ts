import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AutenticarComponent } from './autenticar/autenticar.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';
import { RecuperarContaComponent } from './recuperar-conta/recuperar-conta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//mapeamento das rotas do projeto
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home/autenticar' },
  { path: 'home/autenticar', component: AutenticarComponent },
  { path: 'home/criar-conta', component: CriarContaComponent },
  { path: 'home/recuperar-conta', component: RecuperarContaComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    AutenticarComponent,
    CriarContaComponent,
    RecuperarContaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //formulários reativos
    ReactiveFormsModule, //formulários reativos
    HttpClientModule, //biblioteca para requisições HTTP
    RouterModule.forRoot(routes) //registrando as rotas do projeto
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
