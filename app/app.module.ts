import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { CountState } from './app.state';
import { GlobalErrorHandler } from './global-error-handler';

@NgModule({
  imports: [
    BrowserModule,
    NgxsModule.forRoot([CountState], { developmentMode: true })
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers:[
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ]
})
export class AppModule { }
