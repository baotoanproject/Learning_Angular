import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PermissionRouteGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let lstPermissions: any[] = ['EMPLOYEE', 'ADMIN'];

    const permissions = route.data['permission'] as Array<string>;
    console.log(permissions);
    if (!lstPermissions.includes(permissions)) {
      console.log('fail');

      return false;
    }
    return true;
  }
}
