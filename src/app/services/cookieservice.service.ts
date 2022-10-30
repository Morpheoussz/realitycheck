import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CookieserviceService {

  constructor(private routes: Router, private cookies: CookieService) { }

  managecookies(x){
    if(x == 1){
      let datenow = JSON.stringify(Date.now());
      let jwtchk = this.cookies.get('RealityCheck1');
      let jwtself = this.cookies.get('RealityCheck');
      if(jwtchk != '' && jwtself != ''){
       
        if(datenow > jwtchk){
          this.routes.navigate(['/sign-in']);
        }else{
          return jwtself;
        }
      }else{
        this.routes.navigate(['/sign-in']);
      }
    }
    if(x == 2){
      let datenow = JSON.stringify(Date.now());
      let jwtchk = this.cookies.get('RealityCheckAdmin1');
      let jwtself = this.cookies.get('RealityCheckAdmin');
      if(jwtchk != '' && jwtself != ''){  

        if(datenow > jwtchk){
          this.routes.navigate(['/realitymanagerdatacenter']);
        }else{
          return jwtself;
        }
      }else{
        this.routes.navigate(['/realitymanagerdatacenter']);
      }
    }

  }
}
