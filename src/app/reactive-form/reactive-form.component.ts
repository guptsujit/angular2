import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder ,FormArray} from '@angular/forms';
import { ValidationService } from './validation-service';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styles: ['.help-block { color: red; }'],
})
export class ReactiveFormComponent implements OnInit {
  form: FormGroup;
  formError = {
 
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    //When you add more than one validator in the form builder, you should use an array [] braces for the validators
    this.form = this.fb.group({
      "username": ['', [Validators.required, Validators.minLength(4)]],
      "color": ['', Validators.required],
      "email": ['', [Validators.required, ValidationService.emailValidator]],
      "phone": ['', [Validators.required, Validators.minLength(10)]],
      "state": ['', Validators.required],
      "zip": ['', Validators.required],
      "website": ['', Validators.required],
      "hosting": ['', Validators.required],
      "addresses":this.fb.array([
      
      ])
    
    });

    this.form.valueChanges.subscribe(data => this.validateForm());
  }
  validateForm() {
   
    for (let field in this.form.controls) {
      this.formError[field] = '';
      let input = this.form.get(field);
      //let input = this.form.controls[field]; same as above
      if (input.invalid && (input.dirty || input.touched)) {
        for (let error in input.errors) {
        
          this.formError[field] = ValidationService.getValidatorErrorMessage(error);
          
        }
      }
    //  console.log(input.errors);
  
    }


    return null;
  }
  addInput(): void {
    const arrayControl = <FormArray>this.form.controls['addresses'];
    let newGroup = this.fb.group({
      
        "city1":['',Validators.requiredTrue],
        "city2":['',Validators.required]
    
    });
    arrayControl.push(newGroup);
}
}
