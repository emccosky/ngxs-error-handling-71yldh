import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HandledError, UnhandledError, CountState } from './app.state';

@Component({
  selector: 'my-app',
  template: `
    <h1>Open the console to see the errors</h1>
    <button (click)="handled()">Dispatch Handled Error</button>
    <button (click)="unhandled()">Dispatch Unhandled Error Me</button>
  `
})
export class AppComponent {

  @Select(CountState) count$: Observable<number>;

  constructor(private store: Store) { }

  handled() {
    this.store.dispatch(new HandledError()).pipe(
      catchError(err => {
        console.log("handled error on dispatch subscription")
        return of('')
      })
    ).subscribe();
  }

  unhandled() {
    this.store.dispatch(new UnhandledError()).pipe(
      catchError(err => {
        console.log("unhandled error on dispatch subscription")
        return of('')
      })
    ).subscribe();;
  }

}
