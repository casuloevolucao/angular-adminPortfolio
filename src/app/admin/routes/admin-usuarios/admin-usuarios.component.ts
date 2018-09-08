import { Component, OnInit } from '@angular/core';
import { Db } from '../../controlDados.service';
import { Usuario } from '../../../shared/usuario.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.css']
})
export class AdminUsuariosComponent implements OnInit {

  public email:string

  public usuario:Usuario[]

  constructor(
    private db:Db,
    private toast:ToastrService
  ) { }

  ngOnInit() {
    this.db.getUsers()
    .subscribe((itens:any)=>{
      this.usuario = itens
    })
  }

  Editar(usuario){
    console.log(usuario)
  }

  Delete(usuario){
    console.log(usuario)
  }

}
