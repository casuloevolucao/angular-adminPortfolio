import { Component, OnInit, TemplateRef } from '@angular/core';
import { Db } from '../../../../shared/services/controlDados.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { NgxSpinnerService } from 'ngx-spinner';
import swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-admin-page-home',
  templateUrl: './admin-page-home.component.html',
  styleUrls: ['./admin-page-home.component.css']
})
export class AdminPageHomeComponent implements OnInit {

  modalRef: BsModalRef;

  home:any[]

  editHome:any

  imagem:File

  form: FormGroup = new FormGroup({
    'photo': new FormControl(null, [Validators.required,]),
  })

  constructor(
    private Data: Db,
    private modalService: BsModalService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.Data.getHome().subscribe(itens=>{
      this.home = itens
    })
  }

  onFileChanges(file:File){
    this.imagem = file
  }

  onEdit( edit:any ,editar: TemplateRef<any>){
    this.modalRef = this.modalService.show(editar);
    this.editHome = edit
    console.log(this.editHome)
  }
  
  edit(){
    this.spinner.show()
    this.Data.editHome(this.editHome, this.imagem[0]).then((any)=>{
      this.modalRef.hide()
      this.spinner.hide()
      swal({
        position: 'top-end',
        type: 'success',
        showConfirmButton: false,
        timer: 2000,
        title:`Editado com sucesso!!!`
      })
      this.ngOnInit()
      this.form.reset()
    })
  }

  delete(id:string){
    swal({
      title: 'Você tem certeza?',
      text: "Você não poderá reverter isso!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, exclua!'
    }).then((result) => {
      if (result.value) {
        this.Data.deleteHome(id).then(()=>{
          swal(
            'Excluído!',
            'Seu item foi excluído.',
            'success'
          )
        })
      }
    })
  }  
  
  onAdd(modal: TemplateRef<any>){
    this.modalRef = this.modalService.show(modal);
  }

  add(){
    this.spinner.show()
    this.Data.addHome(this.imagem[0]).then((any)=>{
      this.modalRef.hide()
      this.spinner.hide()
      swal({
        position: 'top-end',
        type: 'success',
        showConfirmButton: false,
        timer: 2000,
        title:`Cadastrado com sucesso!!!`
      })
      this.ngOnInit()
      this.form.reset()
   })
  }
}
