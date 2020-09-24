import { Component, OnInit } from '@angular/core';
import { JunbikoService } from 'src/app/services/JunbikoService.service';
import { Router } from '@angular/router';
@Component({
  selector: 'register-page',
  templateUrl: './RegisterPage.component.html',
})
export class RegisterPage implements OnInit {
  constructor(private junbikoService: JunbikoService, private router: Router) { }
  ngOnInit(): void {
    let checkja = localStorage.getItem("username");
    if(checkja!==null && checkja !==''){
      this.router.navigateByUrl('/home');
    }
  }
  public uname: string;
  public pword: string;
  public comfirmPword: string;
  public email: string;
  public tel: string;
  public status: string;
  public visib: string;
  
  public register(): void {
    if (this.pword === this.comfirmPword) {
      this.junbikoService.Register(this.uname, this.pword, this.email, this.tel)
        .then((respone: any) => {
          console.log("สำเร็จ");
          this.visib = "visible";
          this.status = "ลงทะเบียนสำเร็จ";
          setTimeout(()=> {this.router.navigateByUrl('/home')}, 3000);
        }).catch((respone: any) => {
          // console.log(respone);
          
          this.visib = "visible";
          this.status = respone.error.message;
        })
    } else {
      this.visib = "visible";
      this.status = "password not match";
    }
  };
}