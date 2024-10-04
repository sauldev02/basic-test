import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TitleComponent } from '@shared/components/title/title.component';
import { UsersService } from '@shared/services/users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, TitleComponent, RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export default class UsersComponent {

  public usersService = inject( UsersService )

  // constructor(){
  //   this.usersService.users
  // }

}
