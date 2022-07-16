import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageServiceService {
  constructor() {}

  setLocalStorage(value: string) {
    localStorage.setItem(environment.authTokenKey, value);
  }
}
