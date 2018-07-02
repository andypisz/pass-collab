import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { SingleContactComponent } from './contact-list/single-contact/single-contact.component';
import { MenuComponent } from './menu/menu.component';
import { ViePratiqueComponent } from './menu/vie-pratique/vie-pratique.component';
import { NosClientsComponent } from './menu/nos-clients/nos-clients.component';
import { MonProfilComponent } from './menu/mon-profil/mon-profil.component';
import { ProfilFormComponent } from './menu/mon-profil/profil-form/profil-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    AccueilComponent,
    ContactListComponent,
    SingleContactComponent,
    MenuComponent,
    ViePratiqueComponent,
    NosClientsComponent,
    MonProfilComponent,
    ProfilFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
