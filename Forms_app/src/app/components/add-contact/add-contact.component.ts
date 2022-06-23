import { Component, OnInit } from '@angular/core';
import { Contact } from './model/contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor() { }
  public contact=new Contact;
  ngOnInit(): void {
  }

}
