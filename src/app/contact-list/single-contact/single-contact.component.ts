import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../services/contact.service';
import {Contact} from '../../models/Contact.models';
import {ActivatedRoute, Router} from '@angular/router';
import {C} from '@angular/core/src/render3';

@Component({
  selector: 'app-single-contact',
  templateUrl: './single-contact.component.html',
  styleUrls: ['./single-contact.component.scss']
})
export class SingleContactComponent implements OnInit {

  contact: Contact;

  constructor(private route: ActivatedRoute,
              private contactService: ContactService,
              private router: Router) { }

  ngOnInit() {
    this.contact = new Contact();
    const id = this.route.snapshot.params['id'];
    this.contactService.getContactById(+id).then(
      (contact: Contact) => {
        this.contact = contact;
      }
    );
  }

}
