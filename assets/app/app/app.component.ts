import { Component } from '@angular/core';
import { AppService } from './app.service';
import { ResponseWrapper } from './response-wrapper.model';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  public title = 'app';
  public users: User[];
  
  constructor(
    private appService: AppService
  ){
    this.users = new Array<User>();
  }

  get() {
    this.appService.findAll().subscribe(
      (res: User[]) => {
        console.log(res);
        this.users = res;
      }
    );
  }

  post() {
    const user: User = new User();
    user.name = 'Juan';
    user.lastName = 'Español';
    user.email = 'juan@drimay.es';
    user.password = 'micontra';

    this.appService.create(user).subscribe(
      (res: User) => {
        this.users.push(res);
        console.log(this.users);
      }
    );
    
  }
}
