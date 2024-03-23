import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { IUser } from '../../models/IUser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  providers: []
})
export class UsersComponent {
  users: IUser[] = [];
  constructor(private userService: UserService){}

  getAllUsers = async () => {
    this.users = await this.userService.getAllUsers();
  }
}
