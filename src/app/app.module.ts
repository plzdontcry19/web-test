import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ChangePassword, Footer, HomePage, LoginPage, MenuTop, RecommentCard, RegisterPage, ServiceCard } from './components/components';
import {HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MenuTop,
    HomePage,
    Footer,
    ServiceCard,
    RecommentCard,
    RegisterPage,
    LoginPage,
    ChangePassword
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
     HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
