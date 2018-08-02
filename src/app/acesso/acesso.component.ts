import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css']
})
export class AcessoComponent implements OnInit {

  public cadastro:boolean = false

  constructor() { }

  ngOnInit() {
  }

  public Troca(event: string):void{
    
    if(event == 'cadastro'){
      this.cadastro = true
    }
    if(event == 'login'){
      this.cadastro = false
    }

  }
}
