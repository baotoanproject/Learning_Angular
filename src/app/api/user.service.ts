import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomHttpUrlEncodingCodec } from 'src/encoder';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = environment.backendUrl;
  constructor(private http: HttpClient) {}
  /**
   * @param filter
   * @param sort
   * @param page
   * @param pageSize
   */
  getAllUser(filter: string, sort: string, page: number, pageSize: number) {
    let queryParams = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec(),
    });
    if (filter !== undefined && filter !== null) {
      queryParams = queryParams.set('filter', <any>filter);
    }
    if (sort !== undefined && sort !== null) {
      queryParams = queryParams.set('sort', <any>sort);
    }
    if (page !== undefined && page !== null) {
      queryParams = queryParams.set('page', <any>page);
    }
    if (pageSize !== undefined && pageSize !== null) {
      queryParams = queryParams.set('pageSize', <any>pageSize);
    }
    return this.http.request<any>('get', `${this.baseUrl}/api/Users`, {
      params: queryParams,
    });
  }
}
