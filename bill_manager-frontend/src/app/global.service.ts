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
  
  period = {
    currentMonth: this.months.indexOf((new Date()).getFullYear.toString()),
    currentYear: this.months.indexOf((new Date()).getMonth.toString())
  }

  constructor() { }

  setPeriod(p){
    this.period = p
  }
}
