import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { User } from '@models/req-response';
import { TitleComponent } from '@shared/components/title/title.component';
import { UsersService } from '@shared/services/users.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  public fullName = computed(() => `${this.user()?.first_name} ${this.user()?.last_name}`);

  // public user = signal<User | undefined>(undefined);
  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.usersService.getUserById( id ))
    )
  );


  constructor() {}

}
