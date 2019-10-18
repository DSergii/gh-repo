import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {NgxSpinnerService} from 'ngx-spinner';

@Injectable()
export class RepoSearchService {
  
  private _searchData = new Subject<any>();
  public searchData$ = this._searchData.asObservable();
  
  private BASE_URL: string = 'https://api.github.com/search/repositories';
  private USER_URL: string = 'https://api.github.com/users/';
  
  constructor(
    private http: HttpClient,
    private spinner: NgxSpinnerService,
  ) { }
  
  getRepo(searchParam: string): void {
    this.spinner.show();
    this.http.get(this.BASE_URL + `?q=${searchParam}&per_page=20`)
      .subscribe( res => {
        this._searchData.next(res);
        this.spinner.hide();
      }, error => {
        this.spinner.hide();
      });
  }
  
  getUser(username: string): Observable<any> {
    return this.http.get(this.USER_URL + username);
  }
}
