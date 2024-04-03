import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  title:string=''
  link:string=''
  image:string=''
  ack:any
  data:any
  constructor(private http:HttpClient) { }
  upload(){
    this.data={title:this.title,link:this.link,image:this.image}
    this.http.post('https://teal-unicorn-c6db02.netlify.app/.netlify/functions/api/upload',this.data).subscribe((res)=>{
    this.ack=res
    })
    this.link=''
    this.image=''
    this.title=''
  }

  ngOnInit(): void {
  }

}
