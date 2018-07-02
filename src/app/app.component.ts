import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor() {
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
