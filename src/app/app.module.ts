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
import {RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  { path: 'connexion', component: SigninComponent },
  { path: 'accueil', canActivate: [AuthGuardService], component: AccueilComponent },
  { path: 'menu', canActivate: [AuthGuardService], component: MenuComponent },
  { path: 'contacts', canActivate: [AuthGuardService], component: ContactListComponent },
  { path: 'contacts/view/:id', canActivate: [AuthGuardService], component: SingleContactComponent },
  { path: 'menu/vie-pratique', canActivate: [AuthGuardService], component: ViePratiqueComponent },
  { path: 'menu/nos-clients', canActivate: [AuthGuardService], component: NosClientsComponent },
  { path: 'menu/mon-profil', canActivate: [AuthGuardService], component: MonProfilComponent },
  { path: 'menu/mon-profil/modifier', canActivate: [AuthGuardService], component: ProfilFormComponent },
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: '**', redirectTo: 'menu' }
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
    ProfilFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    AuthGuardService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
