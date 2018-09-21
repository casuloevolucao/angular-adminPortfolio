import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class Db{

    constructor(
        private Data: AngularFirestore,

    ){}

    getTeam():Observable<any>{

        return this.Data.collection('team').valueChanges()
    }

    editTeam(id,item, img){
        
        return this.Data.collection('team').doc(id).update({
            name: item.name,
            title: item.title,
            bio: item.bio,
            social:{
                facebook: item.social.facebook,
                github: item.social.github,
                linkedin: item.social.linkedin,
                instagram: item.social.instagram,
                twitter: item.social.twitter
            }
        })
    }

}