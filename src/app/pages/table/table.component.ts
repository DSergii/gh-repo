import { Component, OnInit } from '@angular/core';
import { RepoSearchService } from '../services/repo-search.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  
  public repos$: Observable<any>;
  
  constructor(
    private searchSrv: RepoSearchService
  ) { }

  ngOnInit() {
    this.repos$ = this.searchSrv.searchData$.pipe(map(data => data.items));
  }

}
