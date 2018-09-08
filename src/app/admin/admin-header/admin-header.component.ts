import { Component, OnInit } from '@angular/core';
import { Db } from '../controlDados.service';
import { Usuario } from '../../shared/usuario.model';
import { Auth } from '../../acesso/Auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from '../../../../node_modules/angularfire2/firestore';

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
    private db:Db,
    private Data:AngularFirestore
  ) {
    setInterval(()=>{
      this.date = Date.now()
    },1)
  
  }

  ngOnInit() {
    this.Auth.auth.onAuthStateChanged(user=>{
      
      this.email = user.email

      this.Data.collection('users').valueChanges()
      .subscribe(item=>{
        item.filter((item:any)=>{
          if(item.uid == user.uid){
            this.usuario = item
          }
        })
      })
    })
  }

  public logout():void{
     this.AuthS.logout()
  }

}
