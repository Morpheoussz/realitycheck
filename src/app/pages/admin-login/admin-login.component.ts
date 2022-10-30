import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../../services/apicall.service';
import { NotificationService } from '../../services/notification.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  private data : any;
  public admin: any;

  public password: any;
  public error: any;

  private dat: any;
  constructor(private http: ApicallService,private notify: NotificationService ,private cookie: CookieService,private routes: Router) { }

  loginAdmin(){
    this.data = {'admin' : this.admin , 'password' : this.password , "key" : "AD101"}

    this.http.postadminData(this.data).subscribe(ans=>{
      if(ans['code'] == 0){
        this.notify.errormsg(ans['message'],'Error');
      }
      if(ans['code'] == 1){
        if(ans['message'] != ''){
          this.dat = Date.now()+(60*40000);
          // const secureFlag = true;
          // const sameSite = 'None';
          // const domain='reality-check.me';
          // const domain='localhost:4200';
          // this.cookie.set('RealityCheckAdmin', ans['message'], 1, '/', domain, secureFlag, sameSite);
          // this.cookie.set('RealityCheckAdmin1', JSON.stringify(this.dat), 1, '/', domain, secureFlag, sameSite);
          
          this.cookie.set('RealityCheckAdmin',ans['message'],1);
          this.cookie.set('RealityCheckAdmin1',JSON.stringify(this.dat),1);
         
        }
       this.routes.navigate(['/omegarealitymangerdata']);
       this.notify.successmsg("Welcome Admin",'Success');
      }
      
    })
  }

  ngOnInit() {
  }

}
