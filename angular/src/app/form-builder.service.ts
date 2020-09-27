import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup,FormControl, Validators} from '@angular/forms'
//import { format } from 'path';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  constructor(private fb : FormBuilder){}

  buildForm(model : any ) : FormGroup{
    if(model === null) return
    const myForm : FormGroup = new FormGroup({});
    for(const property in model){
      if(model[property] instanceof Object){
        this.addControls(myForm, this.buildForm(model[property]))
      }else{
        this.addControls(myForm, property)
      }
    }
    
    console.log(myForm)
    console.log("returning")
    return myForm
  }

  addControls(form : FormGroup, property : any){
    form.addControl(property,  new FormControl('', Validators.required))
  }
}