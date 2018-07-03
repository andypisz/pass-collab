import {Component, OnDestroy, OnInit} from '@angular/core';
import {Contact} from '../models/Contact.models';
import {Subscription} from 'rxjs';
import {ContactService} from '../services/contact.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit, OnDestroy {

  contacts: Contact[];
  contactSubscription: Subscription;

  constructor(private contactsService: ContactService,
              private router: Router) { }

  ngOnInit() {
    console.log('Nombre de contacts 2: ' + this.contacts.length);
    this.contactSubscription = this.contactsService.contactSubject.subscribe(
      (contacts: Contact[]) => {
        this.contacts = contacts;
      }
    );
    this.contactsService.getContactsFromServer();
    this.contactsService.emitContactSubject();
    console.log('Nombre de contacts 1: ' + this.contacts.length);
  }

  onViewContact(id: number) {
    this.router.navigate(['/contacts', 'view', id]);
  }

  ngOnDestroy(): void {
    this.contactSubscription.unsubscribe();
  }

}
