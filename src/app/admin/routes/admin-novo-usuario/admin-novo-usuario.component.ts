import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../../../shared/models/usuario.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Auth } from '../../../shared/services/Auth.service';
import  swal  from 'sweetalert2'

@Component({
  selector: 'app-admin-novo-usuario',
  templateUrl: './admin-novo-usuario.component.html',
  styleUrls: ['./admin-novo-usuario.component.css']
})
export class AdminNovoUsuarioComponent implements OnInit {

  usuario:Usuario = new Usuario()

  imgPadrao:string = "https://firebasestorage.googleapis.com/v0/b/casulo-portfolio.appspot.com/o/users%2Fuser.jpg?alt=media&token=1bc377ba-9887-46d9-8a9b-9ca3a2e33fd4"

  formulario:FormGroup = new FormGroup({
    'nomeCompleto': new FormControl(null, [Validators.required]),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'senha': new FormControl(null, [Validators.required]),
  })

  constructor(
    private toast:ToastrService,
    private router: Router,
    private AuthS: Auth
  ) { }

  ngOnInit() {
  }

  onSubmit(){
   this.usuario.email = this.formulario.value.email
   this.usuario.senha = this.formulario.value.senha
   this.usuario.name = this.formulario.value.nomeCompleto
   this.usuario.photo = this.imgPadrao

    this.AuthS.CadastrarUsuario(this.usuario)

    .then(()=>{
      swal({
        position: 'top-end',
        type: 'success',
        title: 'Cadastro Bem sucedido!!',
        showConfirmButton: false,
        timer: 1500
      })

      this.router.navigate(['/admin'])
    })

  }

}
