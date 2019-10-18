import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, takeUntil } from 'rxjs/internal/operators';
import { UnsubscriberService } from '../services/unsubscriber.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  
  private details$: Observable<any> = this.route.data.pipe(pluck('owner'));
  public owner: any;
  
  constructor(
    private route: ActivatedRoute,
    private unsubscriber: UnsubscriberService
  ) { }

  ngOnInit() {
    this.details$
      .pipe(
        takeUntil(this.unsubscriber.$)
      )
      .subscribe( res => {
        this.owner = res;
      })
  }

}