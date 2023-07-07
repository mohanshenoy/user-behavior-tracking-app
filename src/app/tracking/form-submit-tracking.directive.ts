import { Directive, HostListener } from '@angular/core';
import { TrackData } from './track-data.model';


/*
  to track all form submit events 
*/
@Directive({
  selector: 'form[]'
})
export class FormSubmitTrackingDirective {

  constructor() {}
   
  @HostListener('submit', ['$event', '$event.target'])
  onSubmit(event:any, eventTarget: any) {


    // to collect all parents based on element IDs
    let parents:string[]=[];
    while(eventTarget!= undefined){ 
      eventTarget = eventTarget.parentNode; 
      if(eventTarget==null){
        break;
      }else{
        if(eventTarget.id!=undefined) {
          if(eventTarget.id!==''){
            parents.push(eventTarget.id);
          }
        }
      }
    }

    //referral url
    let refURL = event.target.baseURI;

    //current date
    const now = new Date();

    //capture all data attributes
    const trackData: TrackData = {
      elementId: event.target.id,
      elementType : event.srcElement.localName,
      eventDate: now.toUTCString(), 
      eventType: event.type,
      pageTitle: document.title,
      parents: parents,
      userId: "mohans@unicourt.com",
      refURL: event.target.baseURI,
      pageURL: event.target.action,
    };
    console.table(trackData);
    //console.table(event);
  }
}
