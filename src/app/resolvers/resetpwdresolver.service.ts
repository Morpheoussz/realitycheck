import { Injectable } from '@angular/core';
import { CookieserviceService } from '../services/cookieservice.service';
import { ApicallService } from '../services/apicall.service';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResetpwdresolverService {

  constructor(private http:ApicallService,private checkcookies:CookieserviceService) { }

  resolve(activeSnap:ActivatedRouteSnapshot){
    
    let call= new Promise((resolve,reject)=>{
      this.http.Resolver({'key':'URPR102','token':activeSnap.params.idi}).subscribe((ans)=>{
        // console.log(ans);
        resolve({'resetpass':ans}); 
      }) 
    })
    return Promise.all([call]);
  }

}
