import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../shared/usuario.model';
import { Db } from '../controlDados.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from '../../../../node_modules/angularfire2/firestore';

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
    private db:Db,
    private Data: AngularFirestore
  ) {
    
    
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

}
