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

  years = ['2018','2019']

  currentYear: number
  currentMonth: number

  constructor(
    private globalService: GlobalService,
    private router: Router
  ) {
    this.months = this.globalService.months
  } 

  redirectTo(m: string){
    this.currentMonth = this.months.indexOf(m)

    this.globalService.setPeriod({
      currentMonth: this.currentMonth, 
      currentYear: this.currentYear
    })
    
    this.router.navigate(['/bills'])
  }

  selectedYear(year: string){
    this.currentYear = this.years.indexOf(year)
  }

  ngOnInit() {}
}
