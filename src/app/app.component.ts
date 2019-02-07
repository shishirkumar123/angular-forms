import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-form';

  topics = ['angular','react','vue'];
  userModel = new User('test value', 'Ramesh','ramesh@something.com',1234567890, '', 'morning', true);
}
