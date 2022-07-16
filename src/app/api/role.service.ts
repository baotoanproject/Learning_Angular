import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomHttpUrlEncodingCodec } from 'src/encoder';
import { environment } from 'src/environments/environment.prod';
import { Role } from '../model/role';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private baseUrl = environment.backendUrl;
  constructor(private http: HttpClient) {}
  /**
   * @param filter
   * @param sort
   * @param page
   * @param pageSize
   */
  getAllRole(filter: string, sort: string, page: number, pageSize: number) {
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
    return this.http.request<any>('get', `${this.baseUrl}/api/Roles`, {
      params: queryParams,
    });
  }
  getRoleId(id: string) {
    return this.http.request<any>('get', `${this.baseUrl}/api/Roles/${id}`);
  }
  postRoleId(role: Role) {
    return this.http.request<any>('post', `${this.baseUrl}/api/Roles/`, {
      body: role,
    });
  }
  putRoleId(id: string, role: Role) {
    return this.http.request<any>('put', `${this.baseUrl}/api/Roles/${id}`, {
      body: role,
    });
  }
  deleteRoleId(id: string) {
    return this.http.request<any>('delete', `${this.baseUrl}/api/Roles/${id}`);
  }
}
