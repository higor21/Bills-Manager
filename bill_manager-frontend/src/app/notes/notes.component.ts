import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  months = [
    'January','February','March'
  ];

  canAdd: boolean

  constructor(private globalService: GlobalService,private toastr: ToastrService) {
  }
  
  addMonth(){
    if(this.months.length < 12)
      this.months.push(this.globalService.months[this.months.length])
    this.canAdd = this.months.length < 12
  }
  
  ngOnInit() {
    this.canAdd = this.months.length < 12
  }
}
