import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pdfview',
  templateUrl: './pdfview.component.html',
  styleUrls: ['./pdfview.component.css']
})
export class PdfviewComponent implements OnInit {
  data:any
  link:string=''
  constructor(private http:HttpClient) { }
  book(){
    this.http.post('https://teal-unicorn-c6db02.netlify.app/.netlify/functions/api/view',{id:localStorage.getItem('book')}).subscribe((res)=>{
      this.data=[res]

    })
  }

  ngOnInit(): void {
    this.book()
  }

}
