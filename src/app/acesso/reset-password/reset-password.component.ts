import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Auth } from '../../Auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  public formulario:FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email])
  })

  public error:string

  constructor(
    private auth:Auth,
    private tostr: ToastrService
  ) { }

  ngOnInit() {
  }
  onSubmit(){
    this.auth.Forgot(this.formulario.value.email)

    .then((Resonse:any)=>{
      this.tostr.success("Enviado com sucesso", `verifique seu Email ${this.formulario.value.email}`);
    })
    .catch((erro:any)=>{
      this.error = erro.message
      this.tostr.error("Erro", `${this.error}`)
      console.log(this.error)
    })  
  }
}
