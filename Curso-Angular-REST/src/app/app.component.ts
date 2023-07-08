import { Component } from '@angular/core';
import { logging } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso-Angular-REST';

  usuario = {login: '', senha: ''};

  public login(){
    console.log("teste Login : " + this.usuario.login + " senha: " + this.usuario.senha)
  }

}
