import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../../../shared/usuario.model';
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
    private toast:ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public onSubmit():void{
   
  }

}
