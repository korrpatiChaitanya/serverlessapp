import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { HttpClient } from '@angular/common/http';
import { ProfileComponent } from '../profile/profile.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth:AuthService,private http:HttpClient) { }
  logout():void{
    this.auth.logout()
 }
 data:any
 name:string=''
 search :string=''
 myprofile(){
  this.http.post('https://teal-unicorn-c6db02.netlify.app/.netlify/functions/api/myprofile',{token:this.auth.getToken()}).subscribe((res)=>{
        this.data=res
        this.name=this.data.name
    })
 }
  ngOnInit(): void {
  
  }


}
