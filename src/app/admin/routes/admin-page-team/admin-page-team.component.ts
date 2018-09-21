import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Team } from '../../../shared/models/team.model';
import { Db } from '../../../shared/services/controlDados.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-admin-page-team',
  templateUrl: './admin-page-team.component.html',
  styleUrls: ['./admin-page-team.component.css']
})
export class AdminPageTeamComponent implements OnInit {

  modalRef: BsModalRef;

  team: Team[]

  imagem:any

  editarTeam:Team

  form: FormGroup = new FormGroup({
    'name': new FormControl(null, [Validators.required]),
    'title': new FormControl(null, [Validators.required]),
    'bio': new FormControl(null, [Validators.required]),
    'social': new FormGroup({
      'facebook': new FormControl(),
      'github': new FormControl(),
      'instagram': new FormControl(),
      'linkedin': new FormControl(),
      'twitter': new FormControl()
    })
  })

  constructor(
    private Data: Db,
    private modalService: BsModalService,
    private aft: AngularFirestore
  ) { }

  ngOnInit() {

    this.Data.getTeam().subscribe(itens=>{
      this.team = itens
    })
  }
  
  onFileChanges(file:File){
    console.log(file)
  }

  onEdit(team:Team, template: TemplateRef<any>){
    this.editarTeam = team
    this.modalRef = this.modalService.show(template);
  }

  
}
