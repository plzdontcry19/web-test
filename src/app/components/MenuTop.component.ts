import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'menu-top',
  templateUrl: './MenuTop.component.html'
})
export class MenuTop implements OnInit {


  public unameMenutop: any;

  constructor(private router: Router) {

  }
  ngOnInit(): void {
    this.unameMenutop = localStorage.getItem("username");
  }

  refreshPage() {
    window.location.reload();
  }

  logOut() {
    localStorage.clear();
    this.refreshPage();
    this.router.navigateByUrl('/home');
  }
}
