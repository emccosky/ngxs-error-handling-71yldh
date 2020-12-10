import { Injectable, ErrorHandler } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any) {
    console.log("error catched inside GlobalErrorHandler")

    // Make sure to rethrow the error so Angular can pick it up
    //throw error;
  }
}