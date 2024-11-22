import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isLoginView:boolean=true;

  userRegisterObj:any={
    username:'',
    password:'',
    emailId:''
  }

 userLogin:any={
  username:'',
  password:'',
 }

router = inject(Router);



  onRegister(){
    debugger;
    const isLocalData=localStorage.getItem("angular18Local");
    if(isLocalData != null){
      const localArray=JSON.parse(isLocalData);
      localArray.push(this.userRegisterObj);
      localStorage.setItem("angular18Local",JSON.stringify(localArray));

    }else{
      const localArray=[];
      localArray.push(this.userRegisterObj);
      localStorage.setItem("angular18Local",JSON.stringify(localArray));
    }
    alert("Registration success");
  }

  onLogin(){
    debugger;
    const isLocalData=localStorage.getItem("angular18Local");
    if(isLocalData != null){
      const users=JSON.parse(isLocalData);

      const isuserFound = users.find((m:any)=>m.username===this.userLogin.username && m.password==this.userLogin.password);
      if(isuserFound != undefined){
        this.router.navigateByUrl('dashboard')
        
      }else{
        alert("Invalid username or password");
      }
    }  else{
      alert("No user found");
    }
  }

}
