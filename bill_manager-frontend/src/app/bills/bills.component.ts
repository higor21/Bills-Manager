import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { ToastrService } from 'ngx-toastr';
import { BillsService } from './bills.service';
import { Bill, Year } from './bill-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {

  months: Bill[]
  years: Year[]
  selectedTabYear: number
  selectedTabMonth: number
  canAdd: boolean

  constructor(
    private globalService: GlobalService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private bills_service: BillsService
  ){}
  
  addMonth(){
    if(this.months.length < 12){
      this.months.push(new Bill(this.months.length))
    }
    this.canAdd = this.months.length < 12
  }
  
  ngOnInit() {
    setInterval(() => {
      this.months = this.globalService.data[0].months 
      this.canAdd = this.months.length < 12
    }, 50)

    this.route
      .queryParams
      .subscribe(params => {
        this.selectedTabMonth = params['month'] || (new Date()).getMonth();
        this.selectedTabYear = 0/* params['year'] || (new Date()).getFullYear() */;
      });
  }
}
