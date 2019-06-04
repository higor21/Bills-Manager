import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { ToastrService } from 'ngx-toastr';
import { BillsService } from './bills.service';
import { Bill } from './bill-model';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {

  months: Bill[]

  canAdd: boolean

  constructor(
    //private globalService: GlobalService,
    private toastr: ToastrService,
    private bills_service: BillsService
  ){}
  
  addMonth(){
    if(this.months.length < 12){
      this.months.push(new Bill(this.months.length, (new Date()).getFullYear()))
    }
    this.canAdd = this.months.length < 12
  }
  
  ngOnInit() {
    this.months = this.bills_service.getMonths()
    this.canAdd = this.months.length < 12
  }
}
