import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import{Router} from '@angular/router'
@Component({
  selector: 'app-mainhome',
  templateUrl: './mainhome.component.html',
  styleUrls: ['./mainhome.component.css']
})
export class MainhomeComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }
  
  ngOnInit(): void {
    if(this.auth.isLoggedIn()){this.router.navigate(['user'])}
  }

}
