import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private apiService:ApiService,private rout:Router) { }

  ngOnInit(): void {
    
  }
  logoutUser(){
    this.apiService.logoutUser();
    this.rout.navigate(['/']);
  }

}
