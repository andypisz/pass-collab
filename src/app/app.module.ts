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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';
import {ContactService} from './services/contact.service';
import {Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'accueil/:id', component: SingleContactComponent },
  { path: 'menu/vie-pratique', component: ViePratiqueComponent },
  { path: 'menu/nos-clients', component: NosClientsComponent },
  { path: 'menu/mon-profil', component: MonProfilComponent },
  { path: 'menu/mon-profil/modifier', component: ProfilFormComponent }
];

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
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
