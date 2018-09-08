import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';


@Injectable()
export class Db{

    constructor(
        private Data: AngularFirestore,

    ){}


    getUsers(){

        return this.Data.collection('users').valueChanges()
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