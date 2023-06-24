import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AutenticarComponent } from './autenticar/autenticar.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';
import { RecuperarContaComponent } from './recuperar-conta/recuperar-conta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule //biblioteca para requisições HTTP
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
