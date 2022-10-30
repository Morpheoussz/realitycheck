import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ApicallService } from '../../services/apicall.service';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  fieldTextType: boolean;
  public info: any;
  public signUp :  FormGroup;

  public contentEditable: boolean = false;

  constructor(private _formBuilder: FormBuilder,private http: ApicallService,private notify: NotificationService ,private cookie: CookieService,private routes: Router,private actRt : ActivatedRoute) { }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  toggleEditable(event){
    if(event.target.checked){
      this.contentEditable = true;

    }else{
      this.contentEditable = false;
    }
  }

  signUpAction(){
    var formData = this.signUp.value;
    this.http.postData(this.signUp.value).subscribe(ans=>{
      
      if(ans['code'] == 0){
        if(ans['message'] != ''){
          this.notify.errormsg(ans['message'],'Error');
        }
        
      }
      if(ans['code'] == 1){
        if(ans['message'] != ''){
          this.ngOnInit();
          this.routes.navigate(['/sign-in']);
          
          this.notify.successmsg(ans['message'],'Success');
        }
        
      }
    })

  }


  ngOnInit() {

    this.signUp = this._formBuilder.group({
      checkbox:[this.contentEditable, Validators.required],
      email:['',[Validators.required, Validators.email]],
      username:['' , [Validators.required]],
      password:['' , [Validators.required , Validators.minLength(8)]],
      country:['--Country of residence--',Validators.required],
      
      "key":"USU101"
      
    })

  }

}
