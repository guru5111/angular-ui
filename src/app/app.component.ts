import {Component, OnInit} from '@angular/core';
import {AppComponentService} from './app.component.service';
import {User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: User[];

  newUser: User = new User();

  constructor(private appComponentService: AppComponentService) {

  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.appComponentService.getAllUsers().subscribe((response) => {
      this.users = response;
    });
  }

  updateStatus(user: User) {
    user.status = !user.status;
    this.appComponentService.updateUserstatus(user).subscribe((response) => {
      // success
    }, error1 => {
      user.status = !user.status;
    });
  }

  deleteUserById(id: string, index: number) {
    this.appComponentService.deleteUserById(id).subscribe((response) => {
      console.log(response);
      this.users.splice(index, 1);
    });
  }

  saveOrUpdateUser(user: User) {
    this.appComponentService.updateUserstatus(user).subscribe((response) => {
      if (this.users.findIndex((el) => el.id === response.id) < 1) {
        this.users.push(user);
        this.newUser = new User();
      }
    }, error1 => {
      // show error dialogue
    });
  }

}
