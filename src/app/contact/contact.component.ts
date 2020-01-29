import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  emailMessage: {firstName, lastName, email, phoneNumber, message} = {firstName: '', lastName: '', email: '', phoneNumber: '', message: ''};
  
  constructor() { }

  ngOnInit() {
  }
  
  onSubmit(emailMessage) {
    if(emailMessage.valid){
      console.log(emailMessage.firstName);
      console.log(emailMessage.lastName);
      console.log(emailMessage.email);
      console.log(emailMessage.phoneNumber);
      console.log(emailMessage.message);
      console.log(emailMessage);
    }

  }

}
