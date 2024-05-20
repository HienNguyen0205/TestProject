import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})

export class PermissionsService {

  constructor(
    private authService: AuthService,
    private router: Router,
  ){}

  canActive = (): boolean => {
    if(this.authService.checkLogIn()){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
