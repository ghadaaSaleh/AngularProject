import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../Services/user-auth.service';
import { inject } from '@angular/core';

export const userAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(UserAuthService);
  const router = inject(Router);
  if(authService.isUserLogged){return true}
  else{
   router.navigate(["/Login"]).then(()=>{  return false;});
    console.log("ghada")
    return false;
  }
 
};
