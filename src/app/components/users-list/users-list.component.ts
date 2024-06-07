import { CommonModule, NgFor, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ReturnedData } from '../../interfaces/returned-data';
import { User } from '../../interfaces/user';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [UserComponent, HttpClientModule, NgIf, NgFor, CommonModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent implements OnInit {

  users$!: Observable<User[]>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.users$ = this.http
      .get<ReturnedData>('https://reqres.in/api/users')
      .pipe(map((obj: ReturnedData) => obj.data));
  }
}
