import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  data:any
  name:string=''
  dept:string=''
  email:string=''
  constructor(private http:HttpClient,private auth:AuthService) { }
  profile(){
    this.http.post('https://teal-unicorn-c6db02.netlify.app/.netlify/functions/api/myprofile',{token:this.auth.getToken()}).subscribe((res)=>{
      this.data=res
      this.name=this.data.name
      this.dept=this.data.dept
      this.email = this.data.email
      
    })
  }
  ngOnInit(): void {
    this.profile()
  }

}
