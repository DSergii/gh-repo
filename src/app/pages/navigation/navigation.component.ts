import {Component, HostListener, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RepoSearchService } from '../services/repo-search.service';
import { StorageHelper } from '../../shared/storage.helper';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public searchForm: FormGroup;
  public user: {avatar: string, name: string};
  public activeDropDown: boolean = false;
  
  @HostListener('window:click', ['$event'])
  closeDropDown(event) {
    if(!event.target.closest('.user-box')) {
      this.activeDropDown = false;
    }
  }
  
  constructor(
    private fb: FormBuilder,
    private repoSrv: RepoSearchService,
    private authSrv: AuthService
  ) {
    this.searchForm = this.fb.group({
      search: ''
    })
  }

  ngOnInit() {
    this.user = StorageHelper.getFromStorage('user');
    this.user.avatar = this.user.avatar || '../../../assets/img/user.png';
  }
  
  search(value: {search: string}): void {
    this.repoSrv.getRepo(value.search);
  }
  
  logout(): void {
    this.authSrv.logout();
  }

}