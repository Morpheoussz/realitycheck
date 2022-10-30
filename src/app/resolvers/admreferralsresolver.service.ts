import { Injectable } from '@angular/core';
import { CookieserviceService } from '../services/cookieservice.service';
import { ApicallService } from '../services/apicall.service';

@Injectable({
  providedIn: 'root'
})
export class AdmreferralsresolverService {

  constructor(private http:ApicallService,private checkcookies:CookieserviceService) { }
  resolve(){
    
    let call = new Promise
    ( (resolve,reject) => {
        
        this.http.admResolver({'key':'ADRR101'}).subscribe((ans)=>{
          // console.log(ans);
          resolve({'admreferral':ans});
        
        }) 
    })
    return Promise.all([call]);
  }

}
