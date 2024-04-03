import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  constructor(private http:HttpClient,private sanitizer:DomSanitizer) { }
  data:any
  link:any
  news:any
  a:string=''
  playvedio(){
    this.http.post('https://teal-unicorn-c6db02.netlify.app/.netlify/functions/api/palyvedio',{id:localStorage.getItem('videoid')}).subscribe((res)=>{
      this.data=res
      this.link = this.data.link
      this.news=this.sanitizer.bypassSecurityTrustResourceUrl(this.link)
    })
    
    
  }
  ngOnInit(): void {
    this.playvedio()
  }

}
