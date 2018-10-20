import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Team } from '../models/team.model';
import { AngularFireStorage } from '@angular/fire/storage';
import { Social } from '../models/social.model';
import { Portfolio } from '../models/portfolio.model';
import { Categories } from '../models/categories.model';
import { About } from '../models/sobre.model';
import * as firebase from 'firebase';

@Injectable()
export class Db{

    constructor(
        private aft: AngularFirestore,
        private afs:AngularFireStorage
    ){}
    
    getHome(){
        return this.aft.collection("home").valueChanges()
    }

    addHome( file:File): Promise<any>{
        return new Promise((resolve, reject)=>{
            this.aft.collection("home").add({
                date: firebase.firestore.FieldValue.serverTimestamp()
            }).then((id)=>{
                
                this.afs.storage.ref().child(`home/${id.id}`)

                .put(file)

                .then(()=>{
                    this.afs.storage.ref().child(`home/${id}`)

                    .getDownloadURL()

                    .then((url)=>{
                        this.aft.collection("home").doc(id.id).update({
                            id:id.id,
                            photo:url
                        })
                        resolve()
                    })
                })
            })
        })
    }

    editHome(id: any, file:File): Promise<any>{

        return new Promise((resolve, reject)=>{

            this.afs.storage.ref().child(`home/${id}`)

            .put(file)

            .then(()=>{
                this.afs.storage.ref().child(`home/${id}`)

                .getDownloadURL()

                .then((url)=>{
                    this.aft.collection("home").doc(id).update({
                        date: firebase.firestore.FieldValue.serverTimestamp(),
                        photo: url
                    })
                    resolve()
                })
            })
        })
    }

    deleteHome(id:any){
        return this.aft.collection("home").doc(id).delete()
        .then(()=>{
            this.afs.storage.ref().child(`home/${id}`).delete()
        })
    }

    getAbout(): Observable<any>{
        return this.aft.collection("about").valueChanges()
    }

    editAbout( about:About){
        return this.aft.collection("about").doc(about.id).update({
            name:about.name
        })
    }

    getCategoires(): Observable<any>{
        return this.aft.collection("categories").valueChanges()
    }

    addCategories( categories:Categories ): Promise<any>{
        return new Promise((resolve, reject)=>{
            this.aft.collection("categories").add({
                name:categories.name
            }).then(id=>{
                this.afs.storage.ref().child(`categories/${id.id}`)

                .put(categories.photo)

                .then(()=>{
                    this.afs.storage.ref().child(`categories/${id.id}`)

                    .getDownloadURL()

                    .then(img=>{
                        this.aft.collection("categories").doc(id.id).update({
                            id:id.id,
                            photo:img
                        })
                        resolve()
                    })
                })
            })
        })
    }

    deleteCategories(id:string){
        return this.aft.collection("categories").doc(id).delete()
        .then(()=>{
            this.afs.storage.ref().child(`categories/${id}`).delete()
        })
    }

    editCategories( categories:Categories ): Promise<any>{
        return new Promise((resolve, reject)=>{
            this.aft.collection("categories").doc(categories.id).update({
                name:categories.name
            }).then(id=>{
                this.afs.storage.ref().child(`categories/${categories.id}`)

                .put(categories.photo)

                .then(()=>{
                    this.afs.storage.ref().child(`categories/${categories.id}`)

                    .getDownloadURL()

                    .then(img=>{
                        this.aft.collection("categories").doc(categories.id).update({
                            photo:img
                        })
                        resolve()
                    })
                })
            })
        })
    }

    getPortfolio(): Observable<any>{
        return this.aft.collection('portfolio').valueChanges()
    }

    addPortfolio( portfolio:Portfolio ): Promise<any>{
        return new Promise((resolve, reject)=>{

            this.aft.collection("portfolio").add({
                desc: portfolio.desc,
                categories:portfolio.categories
            }).then(id=>{
                this.afs.storage.ref().child(`portfolio/${id.id}`)

                .put(portfolio.photo)

                .then(()=>{
                    this.afs.storage.ref().child(`portfolio/${id.id}`)
                    
                    .getDownloadURL()

                    .then(file=>{
                        this.aft.collection("portfolio").doc(id.id).update({
                            id:id.id,
                            photo:file
                        })

                        resolve()
                    })
                })
                
            })

        })
    }

    deletePortfolio(id:string){
        return this.aft.collection("portfolio").doc(id).delete()
        .then(()=>{
            this.afs.storage.ref().child(`portfolio/${id}`).delete()
        })
    }

    editPortfolio(portfolio:Portfolio): Promise<any>{
        return new Promise((resolve, reject)=>{
            this.aft.collection("portfolio").doc(portfolio.id).update({
                desc: portfolio.desc,
                categories:portfolio.categories
            }).then(id=>{
                this.afs.storage.ref().child(`portfolio/${portfolio.id}`)

                .put(portfolio.photo)

                .then(()=>{
                    this.afs.storage.ref().child(`portfolio/${portfolio.id}`)
                    
                    .getDownloadURL()

                    .then(file=>{
                        this.aft.collection("portfolio").doc(portfolio.id).update({
                            photo:file
                        })
                        resolve()
                    })
                })
                
            })
        })
    }

    getTeam():Observable<any>{

        return this.aft.collection('team').valueChanges()
    }

    deleteTeam(id:string){
        return this.aft.collection('team').doc(id).delete().then(()=>{
            this.afs.storage.ref().child(`team/${id}`).delete()
        })
    }

    editTeam(item:Team, social:Social, file:File):Promise<any>{
        
        return new Promise((resolve, reject)=>{
            this.afs.storage.ref().child(`team/${item.id}`)

            .put(file)

            .then(()=>{
                this.afs.storage.ref().child(`team/${item.id}`)

                .getDownloadURL()

                .then((url:string)=>{
                    this.aft.collection('team').doc(item.id).update({
                        name: item.name,
                        bio:item.bio,
                        photo: url,
                        title: item.title,
                        social:{
                            facebook: social.facebook,
                            github: social.github,
                            instagram: social.instagram,
                            twitter: social.twitter,
                            linkedin: social.linkedin
                            }
                    })
                    resolve()
                })
            })      
        })
    }

    addTeam(add:Team, social:Social, file:File){
        return new Promise((resolve, reject)=>{
            this.aft.collection('team').add({
                name: add.name,
                bio:add.bio,
                title: add.title,
                social:{
                    facebook: social.facebook,
                    github: social.github,
                    instagram: social.instagram,
                    twitter: social.twitter,
                    linkedin: social.linkedin
                    }
                }).then(id=>{
                    this.afs.storage.ref().child(`team/${id.id}`)

                    .put(file)

                    .then(()=>{
                        this.afs.storage.ref().child(`team/${id.id}`)
                        
                        .getDownloadURL()

                        .then((url:string)=>{
                            this.aft.collection('team').doc(id.id).update({
                                id: id.id,
                                photo: url  
                            })
                        resolve()
                    })
                })        
            })
        })
    }

}