import { Component, OnInit, Input } from '@angular/core';
import { LoginComponent } from '../login/login.component';




@Component({

  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  

 

 
})
export class ContentComponent implements OnInit {

  selectedBookings = "HOTEL";
  gn:string;
  gender =["FEMALE","MALE"];
  bk:string;
  BookingType =["HOTEL","BUS","COMPUTER"];

  locF:string;
  loccationFrom= ["JOHANNESBURG","PRETORIA","CAPE TOWN","BURBAN","BLOEMFONTEIN","POLOKWANE","NELSPRUIT","MAHIKENG","KIMBERLY","BISHO"];
  locT:string;
  loccationTo= ["JOHANNESBURG","PRETORIA","CAPE TOWN","BURBAN","BLOEMFONTEIN","POLOKWANE","NELSPRUIT","MAHIKENG","KIMBERLY","BISHO"];

  constructor( ) {}
  
  ngOnInit()  {
    
   
  }

}
