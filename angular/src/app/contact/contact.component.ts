import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  isSubmitSuccess = false;

  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  onSubmit(){
    this.submitted = true;

    if (this.messageForm.invalid){
      return;
    }

    this.isSubmitSuccess = true;
  }

  ngOnInit(): void {
  }

}
