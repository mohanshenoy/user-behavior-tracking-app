export interface TrackData {
  elementId?: string; 
  elementType : string;
  elementTitle?: string;
  eventDate: string,
  eventType: string,
  isDataMissing?: boolean, // applicable to elements which triggers change events
  isElementRequired?: boolean, // applicable to elements which triggers change events
  isEnteredDataValid?: boolean, // applicable to elements which triggers change events
  pageTitle: string,
  parents?: string[],
  formId?: string, 
  userId: string,
  refURL: string, 
  pageURL?: string,
}


