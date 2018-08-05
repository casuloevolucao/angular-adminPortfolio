import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Auth } from '../../../Auth.service';
import { Usuario } from '../../../shared/usuario.model';
import { Senha } from '../../../shared/senha.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Db } from '../../../controlDados.service';

@Component({
  selector: 'app-admin-editar-usuario',
  templateUrl: './admin-editar-usuario.component.html',
  styleUrls: ['./admin-editar-usuario.component.css']
})
export class AdminEditarUsuarioComponent implements OnInit {

  public usuario: Usuario = new Usuario("","","","")

  public Erro:string

  public imgPadrao:string = "/assets/img/user-160x160.jpg"

  public formulario:FormGroup = new FormGroup({
    'imagem': new FormControl(null, [Validators.required]),
    'nomeCompleto': new FormControl(this.usuario.nomeCompleto, [Validators.required]),
    'usuario': new FormControl(this.usuario.usuario, [Validators.required]),
    'email': new FormControl(this.usuario.email, [Validators.required, Validators.email]),
    'senha': new FormControl(null, [Validators.required]),
  })

  constructor(
    private auth:Auth,
    private toast:ToastrService,
    private router: Router,
    private db:Db
  ) { }

  ngOnInit() {
    this.usuario = this.db.exibirUsuarioSeleecionado()
    console.log(this.usuario)
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
