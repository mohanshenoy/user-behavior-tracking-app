import { Component, HostListener } from '@angular/core';
import { TrackData } from './tracking/track-data.model';

/*
  to track all window/page load events 
*/
@Component({
  selector: 'app-root',
  templateUrl :  './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'host-listener-app';

  ngOnInit() {
    //throw new Error("My error"); // this throws JS error !
  }

  // @HostListener('window:keydown.enter', ['$event'])
  // handleKeyDown(event: KeyboardEvent) {}
  
  @HostListener('window:load', ['$event', '$event.target'])
  onLoad(event:any,  eventTarget:any) {
  
    //referral url
    let refURL = event.target.baseURI;

    //current date
    const now = new Date();

    //capture all data attributes
    const trackData: TrackData = {
      elementType : "window",
      eventDate: now.toUTCString(), 
      eventType: event.type,
      pageTitle: document.title,
      userId: "mohans@unicourt.com",
      refURL: refURL,
    };
    console.table(trackData);
    //console.table(event);
  }
  
  // @HostListener('error', ['$event'])
  // onError(event:any) {
  //   console.log('error occured......');
  //   console.log(event);
  // }


}
