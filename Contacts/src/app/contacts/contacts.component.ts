import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  @Input()
  name: string = "default name";

  @Input()
  title: string = "Mx";

  @Input()
  address: string = "Default address";

  constructor() { }

  ngOnInit(): void {
  }

}
