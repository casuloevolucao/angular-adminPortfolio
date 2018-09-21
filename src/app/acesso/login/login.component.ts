import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Auth } from '../../shared/services/Auth.service';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public Erro:string

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'senha': new FormControl(null, [Validators.required, Validators.minLength(6)])
  })

  constructor(
    private auth:Auth,
    private tostr: ToastrService
  ) { }

  ngOnInit() {
  }

  public login():void{

    this.auth.login(this.formulario.value.email, this.formulario.value.senha)
    
    .then(()=>{
      const toast = swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000
      });
      
      toast({
        type: 'success',
        title: `Login Aceito Bem-Vindo(a) ${this.formulario.value.email}`
      })
    })

    .catch((Response:any)=>{

      this.Erro = Response.message

      this.tostr.error(`${this.Erro}`, 'ERRO')
    })
    
  }
  
}
