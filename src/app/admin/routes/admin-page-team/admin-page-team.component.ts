import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-page-team',
  templateUrl: './admin-page-team.component.html',
  styleUrls: ['./admin-page-team.component.css']
})
export class AdminPageTeamComponent implements OnInit {

  imagem:any

  editar:any = undefined

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
    private Data:AngularFirestore
  ) { }

  ngOnInit() {
  
  }
}
