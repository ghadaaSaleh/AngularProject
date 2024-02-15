import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/Models/iuser';
import { UserAuthService } from 'src/app/Services/user-auth.service';
import { existEmailValidator } from 'src/app/Validators/ExistEmailValidator';
import { passwordMismatchValidator } from 'src/app/Validators/PasswordMismatchValidator';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {
  reactiveForm;
 
  constructor(private router:Router,private formBuilder: FormBuilder,private UserAuthService:UserAuthService){ 
    this.reactiveForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      email: ['',[Validators.required,existEmailValidator(),Validators.required]],
      referral: [''],
      referralOther: [''],
      phoneNo: formBuilder.array([this.formBuilder.control('')]),
      password: ['', ],
      confirmPassword: [''],
      address:  formBuilder.group({ city: [''],
      postalCode: [''],
      street: ['']}),
    },{validators:passwordMismatchValidator()})}

updateReferralValidators(){

if(this.referral?.value=="other")
{
   this.reactiveForm.get('referralOther')?.addValidators([Validators.required])

}else{this.reactiveForm.get('referralOther')?.clearValidators()}
this.reactiveForm.get('referralOther')?.updateValueAndValidity();
}

  onSubmit(){
    debugger
    if(  this.reactiveForm.valid)
   { let userModel:Iuser= this.reactiveForm.value as Iuser;
    console.log(userModel)

    debugger
    this.UserAuthService.addUser(userModel).subscribe(res => {
        console.log(res);
      });
      alert("saved successfully")
      this.router.navigate(['home']);
   }
  else  alert("error")
  }
  get referralOther() {
    return this.reactiveForm.get('referralOther')!;
  }
  get confirmPassword() {
    return this.reactiveForm.get('confirmPassword')!;
  }
  get password() {
    return this.reactiveForm.get('password')!;
  }

  get fullName() {
    return this.reactiveForm.get('fullName')!;
  }

  get phoneNumbers(): FormArray {
    return this.reactiveForm.get('phoneNo') as FormArray;
  }

  addPhoneNo()
  {
this.phoneNumbers.push(new FormControl())

  }
  get referral()
  {
    return this.reactiveForm.get('referral');

  }
  get email()
  {
    return this.reactiveForm.get('email')!;

  }
}
