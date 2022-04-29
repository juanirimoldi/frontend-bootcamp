import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/modules/api-rest/services/menu.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private menuService:MenuService, private router: Router) { 
    this.menuService.updateViewName("");
    this.menuService.setBackIcon(false);
  }

  ngOnInit(): void {
  }
  
}

