import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ApicallService } from '../../services/apicall.service';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public signIn :  FormGroup;
  private dat: any;

  constructor(private _formBuilder: FormBuilder,private http: ApicallService,private notify: NotificationService ,private cookie: CookieService,private routes: Router,private actRt : ActivatedRoute) { }


  signInAction(){
    this.http.postData(this.signIn.value).subscribe(ans=>{
      if(ans['code'] == 0){
        if(ans['message'] != ''){
          this.notify.errormsg(ans['message'],'Error');
        }
      }
      if(ans['code'] == 1){
        if(ans['message'] != ''){
          this.dat = Date.now()+(60*40000);
          // const secureFlag = true;
          // const sameSite = 'None';
          // const domain='reality-check.me';
          // const domain='localhost:4200';

          // this.cookie.set('RealityCheck', ans['message'], 1, '/', domain, secureFlag, sameSite);
          // this.cookie.set('RealityCheck1', JSON.stringify(this.dat), 1, '/', domain, secureFlag, sameSite);

          this.cookie.set('RealityCheck',ans['message'],1);
          this.cookie.set('RealityCheck1',JSON.stringify(this.dat),1);
        
          this.routes.navigate(['/dashboard']);
          this.notify.successmsg("Login Successful please wait while we load your data",'Success');
        }
      }
    })
  }




  ngOnInit() {
    this.signIn = this._formBuilder.group({
      username:['' , [Validators.required]],
      password:['' , [Validators.required]],
      "key":"USI101"
      
    })
  }

}
