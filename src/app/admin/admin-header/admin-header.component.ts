import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../shared/models/usuario.model';
import { Auth } from '../../shared/services/Auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

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
    private afa: AngularFireAuth,
    private AuthS: Auth,
    private aft:AngularFirestore
  ) {
    setInterval(()=>{
      this.date = Date.now()
    },1)
  
  }

  ngOnInit() {
    this.afa.auth.onAuthStateChanged(user=>{
      this.email = user.email

      this.aft.collection('users').valueChanges().subscribe(itens=>{

        itens.filter((item:any)=>{

          if(item.email == this.email){

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
