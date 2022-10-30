import { Injectable } from '@angular/core';
import { CookieserviceService } from '../services/cookieservice.service';
import { ApicallService } from '../services/apicall.service';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReferralsignupresolverService {

  constructor(private http:ApicallService,private checkcookies:CookieserviceService) { }

  resolve(activeSnap:ActivatedRouteSnapshot){
    
    let call= new Promise((resolve,reject)=>{
     
      this.http.Resolver({'key':'USRSUR101','token':activeSnap.params.id}).subscribe((ans)=>{
        // console.log(ans);
        resolve({'referralsignup':ans}); 
      }) 
    })
    return Promise.all([call]);
  }

}
