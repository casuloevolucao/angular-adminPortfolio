import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Auth } from '../../../Auth.service';
import { Usuario } from '../../../shared/usuario.model';
import { Senha } from '../../../shared/senha.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-novo-usuario',
  templateUrl: './admin-novo-usuario.component.html',
  styleUrls: ['./admin-novo-usuario.component.css']
})
export class AdminNovoUsuarioComponent implements OnInit {

  public Erro:string

  public imgPadrao:string = "/assets/img/user-160x160.jpg"

  public formulario:FormGroup = new FormGroup({
    'nomeCompleto': new FormControl(null, [Validators.required]),
    'usuario': new FormControl(null, [Validators.required]),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'senha': new FormControl(null, [Validators.required]),
  })

  constructor(
    private auth:Auth,
    private toast:ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public onSubmit():void{
    let usuario: Usuario = new Usuario(
      this.formulario.value.nomeCompleto,
      this.formulario.value.usuario,
      this.formulario.value.email, 
      this.imgPadrao
    )
    let senha:Senha = new Senha(
      this.formulario.value.senha 
    )

    this.auth.CadastrarUsuario(usuario, senha)

    .then((Response:any)=>{
      this.router.navigate(['/admin/usuarios'])
      this.toast.success('bem sucedido', 'CADASTRO');
    })

    .catch((Response:any)=>{

      this.Erro = Response.message

      this.toast.error(`${this.Erro}`, 'ERRO')

    })
  }

}
