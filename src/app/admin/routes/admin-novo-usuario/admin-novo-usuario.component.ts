import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../../../shared/usuario.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Auth } from '../../../acesso/Auth.service';

@Component({
  selector: 'app-admin-novo-usuario',
  templateUrl: './admin-novo-usuario.component.html',
  styleUrls: ['./admin-novo-usuario.component.css']
})
export class AdminNovoUsuarioComponent implements OnInit {

  usuario:Usuario = new Usuario()

  imgPadrao:string = "/assets/img/user.jpg"

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
   this.usuario.imagem = this.imgPadrao
   this.usuario.status = 'online'
    
   console.log(this.usuario)
   this.AuthS.CadastrarUsuario(this.usuario)
    .then(()=>{
      this.router.navigate(['/admin'])
      this.toast.success('Criado com sucesso !!!', `Usuário ${this.formulario.value.nomeCompleto}`)
    }) 

    .catch(erro=>{
      this.toast.error(`Erro Code ${erro.code}`, `${erro.message}`)
    })
  
  }

}
