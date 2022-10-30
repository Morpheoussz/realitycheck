import { Injectable } from '@angular/core';
import { CookieserviceService } from '../services/cookieservice.service';
import { ApicallService } from '../services/apicall.service';

@Injectable({
  providedIn: 'root'
})
export class AdmrewardsresolverService {

  constructor(private http:ApicallService,private checkcookies:CookieserviceService) { }

  resolve(){
    let call = new Promise
    ( (resolve,reject) => {
        this.http.admResolver({'key':'ADRAR100'}).subscribe((ans)=>{
          // console.log(ans);
          resolve({'admreward':ans});
        
        }) 
    
      })
    return Promise.all([call]);
  }
}
