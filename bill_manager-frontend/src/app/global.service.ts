import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  months = [
    'January','February','March','April',
    'May','June','July','August','September',
    'October','November','December'
  ];
  
  constructor() { }
}
