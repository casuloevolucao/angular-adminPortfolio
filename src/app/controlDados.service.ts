import * as firebase from 'firebase';
import { Usuario } from './shared/usuario.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '../../node_modules/@angular/core';

@Injectable()
export class Db{

    public listaData:AngularFireList<any>

    public usuarios:Usuario

    constructor(
        private Data: AngularFireDatabase,
        private Auth: AngularFireAuth
    ){}

    public getData(){
        this.listaData = this.Data.list('usuarioDetalhe')
        
        return this.listaData
    }

    public consultarUsuario(email:string):Promise<any> {

        return firebase.database().ref(`usuarioDetalhe/${btoa(email)}`)

        .once('value')

    }

    public deleteUsuario($key:string){
        this.listaData.remove($key)
        
    }

}