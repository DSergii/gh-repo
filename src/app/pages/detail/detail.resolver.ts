import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {RepoSearchService} from '../services/repo-search.service';

@Injectable()
export class DeliveryResolve implements Resolve<any> {
  
  constructor(private repoSrv: RepoSearchService,) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.repoSrv.getUser(route.queryParams.name);
  }
  
}