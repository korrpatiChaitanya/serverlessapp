import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name:string=''
  email:string=''
  password:string=''
  dept:string=''
  rollno:string=''
  result:any
  data:any

  constructor(private http:HttpClient) { }
  register(){
    this.data={name:this.name,email:this.email,password:this.password,dept:this.dept,rollno:this.rollno}
    this.http.post('https://teal-unicorn-c6db02.netlify.app/.netlify/functions/api/register',this.data).subscribe((res)=>{
      this.data=res
      this.result=this.data.ack
      console.log(this.result)
    })
    this.name=''
    this.email=''
    this.password=''
    this.dept=''
    this.rollno=''
  }

  ngOnInit(): void {
  }

}
