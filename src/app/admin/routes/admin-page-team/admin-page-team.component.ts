import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Db } from '../../controlDados.service';

@Component({
  selector: 'app-admin-page-team',
  templateUrl: './admin-page-team.component.html',
  styleUrls: ['./admin-page-team.component.css']
})
export class AdminPageTeamComponent implements OnInit {

  imagem:any

  editar:any = undefined

  team:Observable<any[]>

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
    private db:Db,
    private Data:AngularFirestore
  ) { }

  ngOnInit() {
    //this.team = this.Data.collection('team').valueChanges()
  
    this.team = this.Data.collection('team').snapshotChanges().map(
      chages=>{
        return chages.map(
          a=>{
            const data = a.payload.doc.data() as any
            data.id = a.payload.doc.id
            return data
          }
        )
      }
    )
  }

  onEdit(team){
    this.editar = team.id
    console.log(team)
  }
  onSubmit(){
    this.db.editTeam(this.editar, this.form.value, this.imagem[0])
  }
  onFileChange(event:Event){
    this.imagem = (<HTMLInputElement>event.target).files
    console.log(this.imagem)
  }
}
