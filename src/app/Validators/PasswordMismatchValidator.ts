import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordMismatchValidator(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

        let password = control.get('password');
        let confirmPassword = control.get('confirmPassword');
        if (password==null || confirmPassword==null || password.value==null || confirmPassword.value==null) { return null; }
        let validationError = { 'passwordConfirmError': {} };
        return (password?.value == confirmPassword?.value ? null : validationError)
    }
}