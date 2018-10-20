import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Db } from '../../../../shared/services/controlDados.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import { Categories } from '../../../../shared/models/categories.model';

@Component({
  selector: 'app-admin-page-categories-portfolio',
  templateUrl: './admin-page-categories-portfolio.component.html',
  styleUrls: ['./admin-page-categories-portfolio.component.css']
})
export class AdminPageCategoriesPortfolioComponent implements OnInit {

  cateories:Categories[]

  editCategories:Categories

  imagem:File

  modalRef: BsModalRef;

  form: FormGroup = new FormGroup({
    'name': new FormControl(null, [Validators.required]),
    'photo': new FormControl(null, [Validators.required,]),  
  })

  constructor(
    private Data: Db,
    private modalService: BsModalService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.Data.getCategoires().subscribe(itens=>{
      this.cateories = itens
    })
  }

  onFileChanges(file:File){
    this.imagem = file
  }

  onEdit( categories:Categories , editar: TemplateRef<any>){
    this.editCategories = categories
    this.modalRef = this.modalService.show(editar)
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
        this.Data.deleteCategories(id).then(()=>{
          swal(
            'Excluído!',
            'Seu item foi excluído.',
            'success'
          )
        })
      }
    })
  }

  edit(){
    
    let data =  new Categories()
    data.id = this.editCategories.id
    data.name = this.form.value.name
    data.photo = this.imagem[0]
    this.spinner.show()

    this.Data.editCategories(data)
    .then((any:any)=>{
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
  
  onAdd(modal: TemplateRef<any>){
    this.modalRef = this.modalService.show(modal);
  }

  add(){
    
    let data =  new Categories()
    
    data.name = this.form.value.name
    data.photo = this.imagem[0]
    this.spinner.show()

    this.Data.addCategories(data).then(()=>{
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

