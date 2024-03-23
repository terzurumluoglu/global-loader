import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';
import { IUser } from '../../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = 'https://jsonplaceholder.typicode.com/';

  constructor(private readonly http: HttpClient) { }

  getAllUsers = () => {
    const path: string = 'users';
    const url: string = this.baseUrl + path;
    return lastValueFrom(this.http.get<IUser[]>(url));
  }
}
