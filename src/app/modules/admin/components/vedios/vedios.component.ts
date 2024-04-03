import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vedios',
  templateUrl: './vedios.component.html',
  styleUrls: ['./vedios.component.css']
})
export class VediosComponent implements OnInit {

  constructor(private http:HttpClient,private auth:AuthService,private router:Router) { }
  result:any

  getdata(){
    this.http.post('https://teal-unicorn-c6db02.netlify.app/.netlify/functions/api/allcontent',{token:this.auth.getToken()}).subscribe((res)=>{
      this.result=res
    })
  }
  play(id:any):void{
    this.router.navigate(['user/play'])
    console.log(id)
    localStorage.setItem('videoid', id);
  }

  ngOnInit(): void {
    this.getdata()
  }

}
