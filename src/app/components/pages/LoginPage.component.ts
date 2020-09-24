import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObjectUnsubscribedError } from 'rxjs';
import { JunbikoService } from 'src/app/services/JunbikoService.service';

@Component({
  selector: 'login-page',
  templateUrl: './LoginPage.component.html',
})
export class LoginPage implements OnInit {

  public uname: string;
  public pword: string;
  public visib: string = "hidden";

  constructor(private junbikoService: JunbikoService, private router: Router) {
  }
  ngOnInit(): void {
    console.log("hello");
    let check = localStorage.getItem("username");
    console.log(check);
    if(check)
    this.router.navigateByUrl('/home');
  }

  public login(): void {
    this.junbikoService.Login(this.uname, this.pword)
      .then((respone: any) => {
        if (respone) {
          localStorage.setItem("username", respone.username);
          localStorage.setItem("email", respone.email);
          localStorage.setItem("phone", respone.phone);
          // Object.keys(localStorage).forEach(key => {
          //   console.log("Keys "+key+"  "+localStorage.getItem(key));
          // });
          this.refreshPage();
        }
      }).catch((error: any) => {
        console.log(error);
        this.visib = "visible";
      })

  }

  refreshPage() {
    console.log("hello");
    let v = localStorage.getItem("username");
    console.log(v);
    window.location.reload();
  }

  // public login(): void {
  //   this.junbikoService.Login(uname,pword)
  //     .then((respone: any) => {
  //       console.log(respone);
  //     }).catch((error: any) => {
  //       console.log(error);
  //     })
  // }
}
