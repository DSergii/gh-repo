import {Injectable, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class UnsubscriberService implements OnDestroy {
  
  private _subject: Subject<void> = new Subject<void>();
  $ = this._subject.asObservable();
  
  ngOnDestroy(): void {
    this._subject.next();
    this._subject.complete();
  }
}
