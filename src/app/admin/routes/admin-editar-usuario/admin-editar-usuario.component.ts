import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-editar-usuario',
  templateUrl: './admin-editar-usuario.component.html',
  styleUrls: ['./admin-editar-usuario.component.css']
})
export class AdminEditarUsuarioComponent implements OnInit {

  public Erro:string

  public imgPadrao:string = "/assets/img/user-160x160.jpg"

  public formulario:FormGroup = new FormGroup({
    'imagem': new FormControl(null, [Validators.required]),
    'nomeCompleto': new FormControl(this.ngOnInit, [Validators.required]),
    'usuario': new FormControl(null, [Validators.required]),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'senha': new FormControl(null, [Validators.required]),
  })

  constructor(
    private toast:ToastrService,
    private router: Router,
  ) { }

  ngOnInit() {
   
  }

  public onSubmit():void{
    
  }

}
