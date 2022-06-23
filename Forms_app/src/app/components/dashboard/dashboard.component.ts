import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  public username:string="Chinnu";

  public Id: string ="txt1";

  public isDisabled:boolean=false;

  public headingColor="blue";

  public isError=true;

  public myStyle={
    
    color:"pink", 
    fontStyle:"italic",
    textDecoration:"underline"

  }

  ngOnInit(): void {
  }

}
