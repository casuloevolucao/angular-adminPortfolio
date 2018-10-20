import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Team } from '../../../../shared/models/team.model';
import { Db } from '../../../../shared/services/controlDados.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import swal from 'sweetalert2';
import { Social } from '../../../../shared/models/social.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-admin-page-team',
  templateUrl: './admin-page-team.component.html',
  styleUrls: ['./admin-page-team.component.css']
})
export class AdminPageTeamComponent implements OnInit {

  cadastro:boolean = true

  modalRef: BsModalRef;

  team: Team[]

  imagem:File

  editarTeam:Team

  form: FormGroup = new FormGroup({
    'name': new FormControl(null, [Validators.required]),
    'title': new FormControl(null, [Validators.required]),
    'bio': new FormControl(null, [Validators.required]),
    'photo': new FormControl(null, [Validators.required,]),
    'social': new FormGroup({
      'facebook': new FormControl(null),
      'github': new FormControl(null),
      'instagram': new FormControl(null),
      'linkedin': new FormControl(null),
      'twitter': new FormControl(null)
    }),
    
  })

  constructor(
    private Data: Db,
    private modalService: BsModalService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.Data.getTeam().subscribe(snapshot=>{
      this.team = snapshot

      if(this.team.length <4){
        this.cadastro = false
      }

      
    })
  }

  onFileChanges(file:File){
    this.imagem = file
  }

  onEdit(team:Team, editar: TemplateRef<any>){
    this.editarTeam = team
    this.modalRef = this.modalService.show(editar);
  }

  onDelete(id:string){
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
        this.Data.deleteTeam(id).then(()=>{
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
    
    let edit:Team = new Team()
    let social:Social = new Social()
    edit.id = this.editarTeam.id
    edit.name = this.form.value.name
    edit.bio = this.form.value.bio
    edit.title = this.form.value.title
    social.facebook = this.form.value.social.facebook
    social.github = this.form.value.social.github
    social.instagram = this.form.value.social.instagram
    social.linkedin = this.form.value.social.linkedin
    social.twitter = this.form.value.social.twitter
    
    
    this.spinner.show()
    this.Data.editTeam(edit, social, this.imagem[0]).then((item)=>{
      this.modalRef.hide()
      this.spinner.hide()
      swal({
        position: 'top-end',
        type: 'success',
        showConfirmButton: false,
        timer: 2000,
        title:`Usuário (a) ${this.editarTeam.name} editado com sucesso!!!`
      })
      this.form.reset()
    })
  }
  
  onAdd(modal: TemplateRef<any>){

    this.modalRef = this.modalService.show(modal);
  }

  add(){
    let add:Team = new Team()
    let social:Social = new Social()
    add.name = this.form.value.name
    add.bio = this.form.value.bio
    add.title = this.form.value.title
    social.facebook = this.form.value.social.facebook
    social.github = this.form.value.social.github
    social.instagram = this.form.value.social.instagram
    social.linkedin = this.form.value.social.linkedin
    social.twitter = this.form.value.social.twitter

    this.spinner.show()
    this.Data.addTeam(add, social, this.imagem[0]).then((item)=>{
      this.modalRef.hide()
      this.spinner.hide()
      swal({
        position: 'top-end',
        type: 'success',
        showConfirmButton: false,
        timer: 2000,
        title:`Usuário (a) ${this.form.value.name} Cadastrado com sucesso!!!`
      })
      this.ngOnInit()
      this.form.reset()
    })    
  }

}
