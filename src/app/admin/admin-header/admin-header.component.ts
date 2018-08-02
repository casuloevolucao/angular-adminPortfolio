import { Component, OnInit } from '@angular/core';
import { Auth } from '../../Auth.service';
import { Db } from '../../controlDados.service';
import * as firebase from 'firebase';
import { Usuario } from '../../shared/usuario.model';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  public email:string

  public usuario:Usuario

  public hoje:number = Date.now()

  constructor(
    private auth:Auth,
    private db:Db
  ) {
    setInterval(()=>{
      this.usuario
      this.hoje
    },1)
  }


  ngOnInit() {
    firebase.auth().onAuthStateChanged((user)=>{
    this.email = user.email
      
    this.mostrarUsuario()
    }) 
  }

  public mostrarUsuario():void{ 
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

  public logout():void{

    this.auth.logout()
  }

}
