import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Year } from './bills/bill-model';
import { HttpClient } from '@angular/common/http';
import { URL } from './url-pattern'

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  months = [
    'January','February','March','April',
    'May','June','July','August','September',
    'October','November','December'
  ];
  
  data: any

  period = {
    currentMonth: this.months.indexOf((new Date()).getFullYear.toString()),
    currentYear: this.months.indexOf((new Date()).getMonth.toString())
  }

  constructor(
    private http: HttpClient
  ) { }

  setPeriod(p){
    this.period = p
  }

  getYears(): Observable<Year[]> {
    return this.http.get<Year[]>(`${URL}/years`)
  }
}
