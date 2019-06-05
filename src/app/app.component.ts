import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './common/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alreadyLogin:Boolean=true
  loginForm:FormGroup;
  messages:[any]

  constructor(
    private fb:FormBuilder,
    private loginService:LoginService
    ){
      setTimeout(()=>{
        console.log('delay');
        
      },2000)
    }

  ngOnChanges(){
    console.log('something changed');
    
  }

  ngOnInit(){
    this.loginForm=this.fb.group({
      email:[null,[Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,7})+$/)]],
      password:[null,[Validators.required,Validators.minLength(6)]]
    })

    this.loginService.getMessages()
    .subscribe(msg=>{
      this.messages.push(msg)
    })
  }

  login(){
    console.log(this.loginForm);
    navigator.geolocation.getCurrentPosition((position)=>{
      userLoginCredentials.location.latitude = position.coords.latitude;
      userLoginCredentials.location.longitude = position.coords.longitude;
      
    })
    let userLoginCredentials = {
      email:this.loginForm.value.email,
      password : this.loginForm.value.password,
      location :{
        latitude:null,longitude:null
      },
      browserName:navigator.appCodeName,
      os:navigator.platform,
      isCookieEnabled:navigator.cookieEnabled,
      isOnline:navigator.onLine
    }

    

  }
}
