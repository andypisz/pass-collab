import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isAuth = false;

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
  }

  constructor(private authService: AuthService) {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyCSx6QE9DGo0CF3MoVOPaZZiXyehGN1fqI',
      authDomain: 'pass-collab.firebaseapp.com',
      databaseURL: 'https://pass-collab.firebaseio.com',
      projectId: 'pass-collab',
      storageBucket: '',
      messagingSenderId: '251642331372'
    };
    firebase.initializeApp(config);
  }
}
