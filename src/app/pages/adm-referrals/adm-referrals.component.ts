import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ApicallService } from '../../services/apicall.service';

import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-adm-referrals',
  templateUrl: './adm-referrals.component.html',
  styleUrls: ['./adm-referrals.component.css']
})
export class AdmReferralsComponent implements OnInit {

  public data : any;
  public info : any;
  public totalRecords: String;
  public page: Number=1;

  constructor(private http: ApicallService,private notify: NotificationService ,private cookie: CookieService,private routes: Router,private actRt : ActivatedRoute) { 
    this.info = new Array<any>()
  }

  ngOnInit() {
    this.actRt.data.subscribe(
      (ans:any)=>{
        this.info = ans.adrefer[0].admreferral.message;

        this.totalRecords=ans.adrefer[0].admreferral.message.length;
        
      }
    )
  }

}
