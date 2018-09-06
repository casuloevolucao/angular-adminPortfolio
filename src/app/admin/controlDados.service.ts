import { AngularFirestore } from 'angularfire2/firestore';
import { Usuario } from '../shared/usuario.model';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';

@Injectable()
export class Db{


    constructor(
        private Data: AngularFirestore
    ){}


    getUser():Observable<any>{

        return this.Data.collection('users').valueChanges()
    }

}