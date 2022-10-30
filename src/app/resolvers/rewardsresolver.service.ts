import { Injectable } from '@angular/core';
import { CookieserviceService } from '../services/cookieservice.service';
import { ApicallService } from '../services/apicall.service';

@Injectable({
  providedIn: 'root'
})
export class RewardsresolverService {

  constructor(private http:ApicallService,private checkcookies:CookieserviceService) { }

  resolve(){
    let jwt = this.checkcookies.managecookies(1);
    let call = new Promise( (resolve,reject) => {
      this.http.Resolver({'key':'USRR101','load':jwt}).subscribe((ans)=>{
        // console.log(ans);
        resolve({'reres':ans});  
      }) 
    })
    return Promise.all([call]);
  
  }

}
