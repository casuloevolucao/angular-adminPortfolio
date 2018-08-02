import { Component, OnInit } from '@angular/core';
import { Auth } from '../../Auth.service';
import { Db } from '../../controlDados.service';
import { Usuario } from '../../shared/usuario.model';
import * as firebase from 'firebase';

@Component({
  selector: 'app-admin-left-side',
  templateUrl: './admin-left-side.component.html',
  styleUrls: ['./admin-left-side.component.css']
})
export class AdminLeftSideComponent implements OnInit {

  public email:string

  public usuario:Usuario

  constructor(
    private auth:Auth,
    private db:Db
  ) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user)=>{
      this.email = user.email
      this.exibirUsuario()
    })
  }

  public exibirUsuario():void{

    this.db.consultarUsuario(this.email)

    .then((Response:any)=>{
      this.usuario = new Usuario(
        Response.val().nomeCompleto,
        Response.val().usuario,
        Response.val().email,
        Response.val().imagem
      )
      
    })
  }

}
