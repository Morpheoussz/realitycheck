import { Injectable } from '@angular/core';
import { CookieserviceService } from '../services/cookieservice.service';
import { ApicallService } from '../services/apicall.service';

@Injectable({
  providedIn: 'root'
})
export class AdminresolverService {

  constructor(private http:ApicallService,private checkcookies:CookieserviceService) { }

  resolve(){
    
    let call = new Promise
    ( (resolve,reject) => {
        
        this.http.admResolver({'key':'ADAU101'}).subscribe((ans)=>{
          // console.log(ans);
          resolve({'admres':ans});
        
        }) 
    
      }
    )
        
    return Promise.all([call]);
  }

}
