import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toast : ToastrService) { }

  successmsg(message,title){
    this.toast.success(message,title);
  }
  errormsg(message,title){
    this.toast.error(message,title);
  }
  infomsg(message,title){
    this.toast.info(message,title);
  }
  warningmsg(message,title){
    this.toast.warning(message,title);
  }
}
