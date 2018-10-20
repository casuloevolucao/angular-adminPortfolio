import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class Auth{
    
    public IdToken:string

    constructor(
        private router:Router,
        private Auth:AngularFireAuth,
        private Data: AngularFirestore
    ){}

    public CadastrarUsuario(usuario: Usuario){
          
        return this.Auth.auth.createUserWithEmailAndPassword(usuario.email, usuario.senha)

        .then(()=>{
            this.Auth.auth.currentUser.updateProfile({
                displayName: usuario.name,
                photoURL: usuario.photo
            })
        })
        
    }

    public login(email, senha){

        return this.Auth.auth.signInWithEmailAndPassword(email, senha)

        .then(()=>{

            this.Auth.auth.currentUser.getIdToken()

            .then((idToken:any)=>{
                 /*  
                if(this.Auth.auth.currentUser.emailVerified){
                    
                }else{
                    this.Auth.auth.currentUser.sendEmailVerification()
                }
                */
                this.IdToken = idToken

                localStorage.setItem('idToken', idToken)

                this.router.navigate(['/admin'])
            })
            
        })

    }

    public autenticarLogin():boolean{
        if( this.IdToken ==  undefined && localStorage.getItem('idToken') ){
            this.IdToken = localStorage.getItem('idToken')
        }
        if( this.IdToken == undefined){
            this.router.navigate(['/'])
        }
        return this.IdToken !== undefined
    }

    public logout(){
        this.Auth.auth.signOut()
        localStorage.removeItem('idToken')
        this.IdToken = undefined
        this.router.navigate(["/"])        
    }

    public Forgot(email:string){
        
        return this.Auth.auth.sendPasswordResetEmail(email)
    }

}