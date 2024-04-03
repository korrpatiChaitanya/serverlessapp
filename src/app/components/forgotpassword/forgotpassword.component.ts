import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TitleStrategy } from '@angular/router';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  data:any
  email:string=''
  result:string=''
  otp:string=''
  eotp:string=''
  newpass:string=''
  conpass:string=''
  constructor(private http:HttpClient) { }

  sendmail(){
    this.http.post('https://teal-unicorn-c6db02.netlify.app/.netlify/functions/api/sendmail',{email:this.email}).subscribe((res)=>{
      console.log(res)
      this.data=res
      this.result=this.data.status
      this.otp=this.data.Otp
    })
    
  }
  changepass(){
    if(this.eotp==this.otp){
      this.http.post('https://teal-unicorn-c6db02.netlify.app/.netlify/functions/api/updatepass',{newpass:this.newpass,email:this.email}).subscribe((res)=>{
        this.result='Password Changed Successfuly!'
      })
    }
    this.result='Wrong otp!'
    
  }

  ngOnInit(): void {
  }

}
