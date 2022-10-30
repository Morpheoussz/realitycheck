import { Injectable } from '@angular/core';
import { CookieserviceService } from '../services/cookieservice.service';
import { ApicallService } from '../services/apicall.service';

@Injectable({
  providedIn: 'root'
})
export class AdmdeactivatedrewardsresolverService {

  constructor(private http:ApicallService,private checkcookies:CookieserviceService) { }

  resolve(){
    
    let call = new Promise
    ( (resolve,reject) => {

        this.http.admResolver({'key':'ADDRR101'}).subscribe((ans)=>{
          // console.log(ans);
          resolve({'admdeactivereward':ans});
        
        }) 
    
    
      }
    )
    
    
    return Promise.all([call]);
  
  }
}
