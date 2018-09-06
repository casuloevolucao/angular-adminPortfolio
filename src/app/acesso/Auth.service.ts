import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class Auth{
    
    public IdToken:string

    constructor(
        private router:Router,
        private Auth:AngularFireAuth,
    ){}
/*
    public CadastrarUsuario(usuario:Usuario):Promise<any>{
        
        

        return this.Auth.auth.createUserWithEmailAndPassword(usuario.email, senha.senha)

            .then((Response:any)=>{

                delete senha.senha

                this.Data.database.ref(`usuarioDetalhe/${btoa(usuario.email)}`)

                .set(usuario)
            })

    }
*/
    public login(email, senha):Promise<any>{

        return this.Auth.auth.signInWithEmailAndPassword(email, senha)

        .then((Response:any)=>{

            this.Auth.auth.currentUser.getIdToken()

            .then((idToken:any)=>{
                   
                if(this.Auth.auth.currentUser.emailVerified){
                    
                }else{
                    this.Auth.auth.currentUser.sendEmailVerification()
                }

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

    public logout():void{
        this.Auth.auth.signOut()
        localStorage.removeItem('idToken')
        this.IdToken = undefined
        this.router.navigate(["/"])        
    }

    public Forgot(email:string):Promise<any>{
        
        return this.Auth.auth.sendPasswordResetEmail(email)
    }

}