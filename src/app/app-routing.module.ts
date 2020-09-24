import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePassword, HomePage, LoginPage, RegisterPage } from './components/components';

const routes: Routes = [{
  path:"home",
  component: HomePage
},
{
  path:"",
  component: HomePage
},
{
  path:"register",
  component: RegisterPage
},
{
  path:"login",
  component: LoginPage
},{
  path:"change-password",
  component: ChangePassword
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
