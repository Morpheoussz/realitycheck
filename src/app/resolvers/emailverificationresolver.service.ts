import { Injectable } from '@angular/core';
import { CookieserviceService } from '../services/cookieservice.service';
import { ApicallService } from '../services/apicall.service';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmailverificationresolverService {

  constructor(private http:ApicallService,private checkcookies:CookieserviceService) { }
  resolve(activeSnap:ActivatedRouteSnapshot){
    
    //alert(jwt);
    let call= new Promise((resolve,reject)=>{
      //let payload = {};
      // ans is what we used to subscribe
      this.http.Resolver({'key':'UAVR101','token':activeSnap.params.idi}).subscribe((ans)=>{
        // console.log(ans);
        resolve({'emailactivate':ans}); 
      }) 
    })
    return Promise.all([call]);
  }
}
