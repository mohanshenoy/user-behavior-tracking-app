import { ErrorHandler } from "@angular/core";

export class MyErrorHandler extends ErrorHandler {
    constructor() {
      super();
    }
  
    override handleError(error: ErrorEvent) {
      //console.log("an error occured...........");
      console.error(error);
      // or push to sentry , or internal remote server 
    }
  }