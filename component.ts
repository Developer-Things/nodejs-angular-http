import { Component, OnInit } from '@angular/core';
import { GetrecordsService } from './getrecords.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  constructor(private service:GetrecordsService){
  }


  ngOnInit(){
    this.getDatafromapi()
  }

  getDatafromapi(){
    this.service.getData().subscribe((response)=>{
      console.log("Response data:",response)
    },(error)=>{
      console.log("Error:"+error)
    })
  }

}
