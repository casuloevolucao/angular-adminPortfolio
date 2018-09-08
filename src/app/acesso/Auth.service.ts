import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../shared/usuario.model';
import { AngularFirestore } from 'angularfire2/firestore';

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
        .then((res)=>{
            delete usuario.senha
            this.Data.collection('users').add({
                name: usuario.name,
                email: usuario.email,
                photo: usuario.imagem,
                status: usuario.status,
                uid: res.uid
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