import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { StorageHelper } from '../../shared/storage.helper';

@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(
    private router: Router
  ){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (StorageHelper.getFromSessionStorage('token')) {
      return true;
    }
    
    this.router.navigate(['/login']);
    return false;
  }
}