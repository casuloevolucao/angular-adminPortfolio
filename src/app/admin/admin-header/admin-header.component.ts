import { Component, OnInit } from '@angular/core';
import { Db } from '../controlDados.service';
import { Usuario } from '../../shared/usuario.model';
import { Auth } from '../../acesso/Auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  email:string

  usuario:Usuario = new Usuario()

  date:number = Date.now()

  constructor(
    private Auth: AngularFireAuth,
    private AuthS: Auth,
    private db:Db
  ) {
    setInterval(()=>{
      this.date = Date.now()
    },1)

    this.db.getUser()

    .subscribe(itens=>{

      itens.filter((user:Usuario)=>{
        if(user.email == this.email){

          this.usuario = user
        }
      })
    })
    
  }


  ngOnInit() {
    this.Auth.auth.onAuthStateChanged(user=>{
      this.email = user.email
    })
  }

  public logout():void{
     this.AuthS.logout()
  }

}
