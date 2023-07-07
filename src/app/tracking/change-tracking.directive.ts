import { Directive, HostListener } from '@angular/core';
import { TrackData } from './track-data.model';

/*
  to track all change events in specified elements
*/
@Directive({
  selector: `
        input[type="text"] , 
        input[type="number"],
        input[type="password"],
        input[type="tel"],
        input[type="date"],
        input[type="email"],
        input[type="month"],
        input[type="number"],
        input[type="time"],
        input[type="week"],
        input[type="radio"],
        input[type="checkbox"],
        textarea[],
        select[]
        `
})
export class ChangeTrackingDirective{
  
  constructor() {}


  @HostListener('change', ['$event', '$event.target'])
  onInputTextChange(event: any ,  eventTarget: any) {

    // to collect all parents based on element IDs
    let parents:string[]=[];
    while(eventTarget!= undefined){ 
      eventTarget = eventTarget.parentNode; 
      if(eventTarget==null){
        break;
      }else{
        if(eventTarget.id!=undefined) {
          if(eventTarget.id!==''){ // when i checked checkbox , i was getting typeof id = string, even though id was not set !
            parents.push(eventTarget.id);
          }
        }
      }
    }
    
    //get the form id if exists
    let formId='NA';
    let formObj = event.target.form;
    if(formObj!=null){
      formId = event.target.form.id;
    }

    //referral url
    let refURL = event.target.baseURI;
    
    //current date
    const now = new Date();

    //capture all data attributes
    const trackData: TrackData = {
      elementId: event.target.id,
      elementType : event.target.type,
      eventDate: now.toUTCString(), 
      eventType: event.type,
      isDataMissing: event.target.validity.valueMissing,
      isElementRequired: event.target.required,
      isEnteredDataValid:	event.target.validity.valid ,
      pageTitle: document.title,
      parents: parents,
      formId: formId,
      userId: "mohans@unicourt.com",
      refURL: refURL,
    };
    console.table(trackData);
  }
}
