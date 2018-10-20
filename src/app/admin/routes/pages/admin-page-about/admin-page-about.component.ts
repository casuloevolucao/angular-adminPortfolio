import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Db } from '../../../../shared/services/controlDados.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import { About } from '../../../../shared/models/sobre.model';

@Component({
  selector: 'app-admin-page-about',
  templateUrl: './admin-page-about.component.html',
  styleUrls: ['./admin-page-about.component.css']
})
export class AdminPageAboutComponent implements OnInit {

  modalRef: BsModalRef;

  about:About[]
  
  editAbout:About

  form: FormGroup = new FormGroup({
    'name': new FormControl(null, [Validators.required]),
  })

  constructor(
    private Data: Db,
    private modalService: BsModalService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.Data.getAbout().subscribe(itens=>{
      this.about = itens
    })
  }

  onEdit(about:About, editar: TemplateRef<any>){
    this.editAbout = about
    this.modalRef = this.modalService.show(editar);
  }

  edit(){

    let data = new About()
    data.id = this.editAbout.id
    data.name = this.form.value.name

    this.spinner.show()
    this.Data.editAbout(data).then((any:any)=>{
      this.modalRef.hide()
      this.spinner.hide()
      swal({
        position: 'top-end',
        type: 'success',
        showConfirmButton: false,
        timer: 2000,
        title:`editado com sucesso!!!`
      })
      this.form.reset()
      this.ngOnInit()

    })
    
  }
}