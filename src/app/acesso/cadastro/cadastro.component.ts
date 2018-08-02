import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../../shared/usuario.model';
import { Senha } from '../../shared/senha.model';
import { Auth } from '../../Auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  @Output() public trocaLogin: EventEmitter<string> = new EventEmitter()

  public Erro:string

  public imgPadrao:string = "/assets/img/user-160x160.jpg"

  public formulario:FormGroup = new FormGroup({
    'nomeCompleto': new FormControl(null, [Validators.required]),
    'usuario': new FormControl(null, [Validators.required]),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'senha': new FormControl(null, [Validators.required, Validators.minLength(6)]),
    'terms': new FormControl(null, [Validators.required])

  })

  constructor(
    private auth:Auth,
    private tostr:ToastrService
  ) { }

  ngOnInit() {
  }

  public cadastrar():void{
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
      this.trocaLogin.emit('login')
      this.tostr.success('bem sucedido', 'CADASTRO');
    })

    .catch((Response:any)=>{

      this.Erro = Response.message

      this.tostr.error(`${this.Erro}`, 'ERRO')

    })
  }

  public Login():void{
    this.trocaLogin.emit('login')
  }

}
