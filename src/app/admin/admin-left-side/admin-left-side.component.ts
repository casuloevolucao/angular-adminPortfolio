import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../shared/models/usuario.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-admin-left-side',
  templateUrl: './admin-left-side.component.html',
  styleUrls: ['./admin-left-side.component.css']
})
export class AdminLeftSideComponent implements OnInit {

  public email:string

  public usuario:Usuario = new Usuario()

  constructor(
    private afa: AngularFireAuth,
    private aft: AngularFirestore
  ) {}

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
}
