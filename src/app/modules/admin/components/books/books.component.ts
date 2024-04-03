import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:any
  constructor(private http:HttpClient,private auth:AuthService,private router:Router) { }
  allbooks(){
    this.http.post('https://teal-unicorn-c6db02.netlify.app/.netlify/functions/api/allbooks',{'token':this.auth.getToken()}).subscribe((res)=>{
    this.books=res
    })
  }
  pdf(id:any):void{
    this.router.navigate(['user/pdf'])
    localStorage.setItem('book', id);
  }
  ngOnInit(): void {
    this.allbooks()
  }

}
