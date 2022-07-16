import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { CustomHttpUrlEncodingCodec } from "../../encoder";
import { User } from "../model/user";

@Injectable({
  providedIn: "root",
})
export class AuthenticateService {
  private baseUrl = environment.backendUrl;

  constructor(private http: HttpClient) {}
  /**
   * @param email
   * @param password
   */
  getLogin(email: string, password: string) {
    let queryParams = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec(),
    });
    if (email !== undefined && email !== null) {
      queryParams = queryParams.set("email", <any>email);
    }
    if (password !== undefined && password !== null) {
      queryParams = queryParams.set("password", <any>password);
    }
    return this.http.request<any>("post", `${this.baseUrl}/api/Login`, {
      params: queryParams,
    });
  }
  getRegister(user: User) {
    return this.http.request<any>("post", `${this.baseUrl}/api/SignUp`, {
      body: user,
    });
  }
}
