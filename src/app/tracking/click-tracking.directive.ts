import { DOCUMENT } from '@angular/common';
import { Directive, HostListener } from '@angular/core';
import { TrackData } from './track-data.model';

/*
  to track all click events in specified elements
*/
@Directive({
  selector: 'a[] , button[]'
})
export class ClickTrackingDirective {

  constructor() {}

  @HostListener('click', ['$event' , '$event.target'])
  onClick(event:any , eventTarget: any) {

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

    //get the form id if exists
    let formId='NA';
    let formObj = event.target.form;
    if(formObj!=null) {
      formId = event.target.form.id;
    }

    //referral url
    let refURL = event.target.baseURI;

    //page url
    let pageURL = 'NA';
    let elementType = event.target.localName;
    if("a"==elementType){
      pageURL = event.target.href;
    }
    if("button"==elementType){
      if(formObj!=null) {
        pageURL = event.target.form.action;
      }     
    }

    //current date
    const now = new Date();

    //capture all data attributes
    const trackData: TrackData = {
      elementId: event.target.id,
      elementType : event.target.localName,
      elementTitle: event.target.innerHTML,
      eventDate: now.toUTCString(), 
      eventType: event.type,
      pageTitle: document.title,
      parents: parents,
      formId: formId,
      userId: "mohans@unicourt.com",
      refURL: refURL,
      pageURL: pageURL,
    };
    console.table(trackData);
    //console.table(event);
  }

}