import { Injectable } from '@angular/core';
import { Bill, Year } from './bill-model';
import { HttpClient } from '@angular/common/http';
import { URL } from '../url-pattern'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillsService{

  months: Bill[]

  constructor(
    private http: HttpClient
  ) { }

  getYears(): Observable<Year[]> {
    return this.http.get<Year[]>(`${URL}/years`)
  }
}
