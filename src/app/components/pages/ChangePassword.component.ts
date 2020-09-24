import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JunbikoService } from 'src/app/services/JunbikoService.service';
@Component({
  selector: 'change-password',
  templateUrl: './ChangePassword.component.html',
})
export class ChangePassword implements OnInit {

  constructor(private router: Router, private junbikoService: JunbikoService) { }
  ngOnInit(): void {
    let check = localStorage.getItem("username");
    if (check == null || check == '') {
      this.router.navigateByUrl('/home');
    }
  }
  public pass: string;
  public comfirmPass: string;
  public visib;
  public status;
  public uname: string = localStorage.getItem("username");
  public email: string = localStorage.getItem("email");
  public phone: string = localStorage.getItem("phone");

  public changPassword(): void {
    if (this.pass === this.comfirmPass) {
      this.junbikoService.Update(this.uname, this.pass)
        .then((respone: any) => {
          this.visib = "visible";
          this.status = respone.message;
        }).catch((respone: any) => {
          console.log(respone + "cant change");
        })
  } else {
      this.visib = "visible";
      this.status = "password not match";
    }
  }

}
