import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textprocessor',
  templateUrl: './textprocessor.component.html',
  styleUrls: ['./textprocessor.component.css']
})
export class TextprocessorComponent implements OnInit {

  constructor() { }
  public isBold: boolean ;

  ngOnInit(): void {
  }
  ChangeStyle(f)
  {
     this.isBold = f.checked;
  }
}
