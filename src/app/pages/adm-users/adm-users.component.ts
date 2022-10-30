import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ApicallService } from '../../services/apicall.service';

import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-adm-users',
  templateUrl: './adm-users.component.html',
  styleUrls: ['./adm-users.component.css']
})
export class AdmUsersComponent implements OnInit {

  public data : any;
  public info : any;
  public totalRecords: String;
  public page: Number=1;

  constructor(private http: ApicallService,private notify: NotificationService ,private cookie: CookieService,private routes: Router,private actRt : ActivatedRoute) { 
    this.info = new Array<any>()
  }

  deActivate(username){
    // this.username=this.info['username'];
    this.data={'user' :username, "key" : "ADDAC102"}
    this.http.postadminData(this.data).subscribe((ans)=>{
      if(ans['code'] == 0){
        this.notify.errormsg(ans['message'],'Error');
      }
      if(ans['code'] == 1){
        if(ans['message'] != ''){

          this.notify.successmsg(ans['message'],'Success');
          
        }
       
      }

    })
  }

  ngOnInit() {
    this.actRt.data.subscribe(
      (ans:any)=>{
        this.info = ans.admusers[0].usares.message;

        this.totalRecords=ans.admusers[0].usares.message.length;
        

      }
    )
  }

}
