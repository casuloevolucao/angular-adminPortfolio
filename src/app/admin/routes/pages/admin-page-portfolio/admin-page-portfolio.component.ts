import { Component, OnInit, TemplateRef } from '@angular/core';
import { Db } from '../../../../shared/services/controlDados.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { Portfolio } from '../../../../shared/models/portfolio.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { Categories } from '../../../../shared/models/categories.model';

@Component({
  selector: 'app-admin-page-portfolio',
  templateUrl: './admin-page-portfolio.component.html',
  styleUrls: ['./admin-page-portfolio.component.css']
})
export class AdminPagePortfolioComponent implements OnInit {

  portfolio:Portfolio[]

  editPortfolio:Portfolio

  categories:Categories[]

  modalRef: BsModalRef;

  imagem:File

  form: FormGroup = new FormGroup({
    'desc': new FormControl(null, [Validators.required]),
    'categories': new FormControl(null, [Validators.required]),
    'photo': new FormControl(null, [Validators.required,]), 
  })

  constructor(
    private Data:Db,
    private modalService: BsModalService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.Data.getPortfolio().subscribe(itens=>{
      this.portfolio = itens
    })
    this.Data.getCategoires().subscribe(itens=>{
      this.categories = itens
    })
  }
  onFileChanges(file:File){
    this.imagem = file
  }

  onEdit(portfolio:Portfolio, editar: TemplateRef<any>){
   this.editPortfolio = portfolio
   this.modalRef = this.modalService.show(editar)
  }

  edit(){
    let data = new Portfolio()
    data.id = this.editPortfolio.id
    data.desc = this.form.value.desc
    data.categories = this.form.value.categories
    data.photo = this.imagem[0]
    this.spinner.show()
    this.Data.editPortfolio(data).then((any:any)=>{
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
        this.Data.deletePortfolio(id).then(()=>{
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

    let data = new Portfolio()

    data.desc = this.form.value.desc
    data.categories = this.form.value.categories
    data.photo = this.imagem[0]
    
    this.spinner.show()
    this.Data.addPortfolio(data).then((res:any)=>{
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
