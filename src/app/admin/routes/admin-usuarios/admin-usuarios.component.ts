import { Component, OnInit } from '@angular/core';
import { Db } from '../../../controlDados.service';
import * as firebase  from 'firebase'
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
    var x = this.db.getData();
    x.snapshotChanges().subscribe(item => {
      this.usuario = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;

        console.log(y)
        this.usuario.push(y as Usuario);
        console.log(this.usuario)
      });
    });  
  }

  public onDelete($key:string){
    if(confirm('Tem certeza ?') == true){
    this.db.deleteUsuario($key)
    this.toast.warning("Removido com sucesso !!")
    }
  }

}
