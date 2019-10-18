import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { StorageHelper } from '../../shared/storage.helper';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router
  ) { }
  
  get Token(): any {
    return StorageHelper.getFromSessionStorage('token');
  }
  
  set Token(token: any) {
    StorageHelper.addToSessionStorage(token,'token');
  }
  
  ghLogin(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GithubAuthProvider();
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          resolve(res);
        }, err => reject(err))
    });
  }
  
  loginWithEmail(credentials: {email: string, password: string}): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
        .then(res => {
          resolve(res);
        }, err => reject(err))
    })
  }
  
  logout(): void {
    StorageHelper.removeFromStorage('user');
    StorageHelper.removeFromSessionStorage('token');
    this.router.navigate(['/login']);
    firebase.auth().signOut()
      .then(res => {

        }, err => {
        
      });
  }
}
