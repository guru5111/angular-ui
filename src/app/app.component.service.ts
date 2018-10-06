import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from './user';

@Injectable()
export class AppComponentService {

  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`/api/v1/user`);
  }

  updateUserstatus(user: any): Observable<User> {
    return this.http.post<User>(`/api/v1/user`, user);
  }

  deleteUserById(id: string) {
    return this.http.delete(`/api/v1/user/${id}`);
  }
}
