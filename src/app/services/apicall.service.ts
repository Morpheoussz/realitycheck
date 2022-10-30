import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http : HttpClient) { }
  private ep: string ='http://localhost/realitycheckapi/realityApi.php';
  private ep2: string ='http://localhost/realitycheckapi/reality-adminApi.php';
 
  // private ep: string ='/realitycheckapi/realityApi.php';
  // private ep2: string ='/realitycheckapi/reality-adminApi.php';
  // private ep: string ='/zenithapi/zenithApi.php';
  // private ep2: string ='/zenithapi/zenith-adminApi.php';
  postData(payload){
    return this.http.post(this.ep,JSON.stringify(payload));
  }
  postadminData(payload){
    return this.http.post(this.ep2,JSON.stringify(payload));
  }

  Resolver(payload){
    return this.http.post(this.ep,JSON.stringify(payload));
  }
  admResolver(payload){
    return this.http.post(this.ep2,JSON.stringify(payload));
  }
}