import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  months: string[]
  years: number[]
  data: any

  currentYear: number
  currentMonth: number

  constructor(
    private globalService: GlobalService,
    private router: Router
  ) {} 

  redirectTo(m: string){
    this.currentMonth = this.globalService.months.indexOf(m)

    this.globalService.setPeriod({
      currentMonth: this.currentMonth, 
      currentYear: this.currentYear
    })

    this.router.navigate(['/bills'], {queryParams: { month: this.currentMonth, year: this.currentYear }})
  }

  selectedYear(year: string){
    this.currentYear = parseInt(year)
    this.months = this.globalService.data[this.years.indexOf(parseInt(year))].months.map(m => this.globalService.months[m.month])
  }

  ngOnInit() {
    this.globalService.getYears().subscribe(years => {
      this.years = years.map(y => y.year)
      this.globalService.data = years
    })
  }
}
