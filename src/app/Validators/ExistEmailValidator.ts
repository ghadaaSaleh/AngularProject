import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function existEmailValidator():ValidatorFn{

    return(control:AbstractControl):ValidationErrors|null=>{
  let emailVal:String=control.value;
  if(emailVal.length==0){return null;}
  let validationError={'EmailNotValid':{'value':emailVal}};
  return (emailVal.includes('@')?null:validationError)
    }
  }