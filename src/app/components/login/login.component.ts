import { Component, OnInit } from '@angular/core';
import  {Router} from '@angular/router'
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data:any
  result:string=''
  email:string=''
  password:string=''
  load:boolean=false
  constructor(private router:Router,private auth:AuthService) { }

  submit(){
    this.load=true
    this.data={email:this.email,password:this.password}
    
    this.auth.login(this.data).subscribe(results=>{
      this.load=false
      this.result = "Mail sent to your registred email"

      if(results.token!=''){
        this.auth.setToken(results.token)
        
      }
      else{
        this.result='wrong details!!!'
      }
    })
  }

  ngOnInit(): void {
    if(this.auth.isLoggedIn()){this.router.navigate(['user'])}
  }

}
