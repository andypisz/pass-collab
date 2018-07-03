import { Injectable } from '@angular/core';
import {Contact} from '../models/Contact.models';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacts = [];
  contactSubject = new Subject<Contact[]>();

  constructor(private httpClient: HttpClient) { }

  emitContactSubject() {
    this.contactSubject.next(this.contacts.slice());
  }

  getContactById(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/contacts/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  saveContactsToServer() {
    firebase.database().ref('/contacts').set(this.contacts);
  }

  getContactsFromServer() {
    firebase.database().ref('/contacts')
      .on('value', (data: DataSnapshot) => {
          this.contacts = data.val() ? data.val() : [];
          this.emitContactSubject();
        }
      );

  }
}
