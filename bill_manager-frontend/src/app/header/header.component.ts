import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  months: string[]

  years = ['2018','2019']

  currentYear: number
  currentMonth: number

  constructor(private globalService: GlobalService) {
    this.months = this.globalService.months
  } 

  redirectTo(m: string){
    this.currentMonth = this.months.indexOf(m)
    //console.log(this.months[this.currentMonth] + ' de ' + this.years[this.currentYear])
  }

  selectedYear(year: string){
    this.currentYear = this.years.indexOf(year)
  }

  ngOnInit() {}
}
