import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class userService {
  private API = environment.production;
  constructor(private http: HttpClient) {}

  public getListUser() {
    return this.http.get(this.API + '');
  }
}
