import { Component, OnInit, Input } from '@angular/core';
import { Bill } from '../bill-model';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-monthly-bill',
  templateUrl: './monthly-bill.component.html',
  styleUrls: ['./monthly-bill.component.css']
})
export class MonthlyBillComponent implements OnInit {

  @Input() month: Bill

  label: string

  constructor(
    private globalService: GlobalService
  ){}

  ngOnInit() {
    if(this.month){
      this.label = this.globalService.months[this.month.month]
      console.log(this.label)
    }
  }
}
