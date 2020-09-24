import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { promise } from 'protractor';
import { resolve } from 'url';

@Injectable({
    providedIn: 'root'
})
export class JunbikoService {
    
    constructor(private http: HttpClient) {

    }

    public Login(user: string, password: string): Promise<any> {
        return new Promise((resolve, reject) => {
            // console.log(user +" "+ password);
            let url: string = environment.apiBaseURL + "/login";
            this.http.post(url,{ "username": user, "password": password },this.getDefaultOptions()).toPromise()
                .then((respone: any) => {
                    // console.log(respone);
                    resolve(respone);
                
                }).catch((error: any) => {
                    // console.log(error);
                    reject(error);

                })
        })
    };
    public Register(user:string,password:string,email:string,phone:string):Promise<any>{
        return new Promise((resolve, reject) =>{
            let url: string = environment.apiBaseURL + "/register";
            this.http.post(url,{ "username": user, "password": password,"email":email,"phone":phone},this.getDefaultOptions()).toPromise()
            .then((respone:any)=>{
                resolve(respone);
            }).catch((error:any)=>{
                reject(error);
            })
        })
    };
    public Update(user:string,password:string): Promise<any>{
        return new Promise((resolve,reject)=>{
            let url: string = environment.apiBaseURL + "/change";
            this.http.put(url,{"username":user,"password":password},this.getDefaultOptions()).toPromise()
            .then((respone:any)=>{
                resolve(respone);
            }).catch((error:any)=>{
                reject(error);
            })
        })
    };
    public Delete(user:string): Promise<any>{
        return new Promise((resolve,reject)=>{
            let url: string = environment.apiBaseURL + "/delete/"+user;
            this.http.delete(url,this.getDefaultOptions()).toPromise()
            .then((respone:any)=>{
                resolve(respone);
            }).catch((error:any)=>{
                reject(error);
            })
        })
    };

    public getDefaultOptions(): any { 
        let httpOptions = { 
          headers: new HttpHeaders({
            'Content-Type': 'application/json'})
        };
        return httpOptions;
      };
}