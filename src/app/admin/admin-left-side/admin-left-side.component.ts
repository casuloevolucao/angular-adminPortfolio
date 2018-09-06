import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../shared/usuario.model';
import { Db } from '../controlDados.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-admin-left-side',
  templateUrl: './admin-left-side.component.html',
  styleUrls: ['./admin-left-side.component.css']
})
export class AdminLeftSideComponent implements OnInit {

  public email:string

  public usuario:Usuario

  constructor(
    private Auth: AngularFireAuth,
    private db:Db
  ) {
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

 

}
