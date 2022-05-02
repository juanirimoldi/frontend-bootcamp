import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/modules/api-rest/services/menu.service';
import { UserService } from 'src/app/modules/api-rest/services/user.service';
import { user } from '../../interfaces/user';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: user;
  loading = false;

  constructor(private menuService: MenuService, private userService: UserService) { 
    this.loading = true
    this.menuService.updateViewName("My Account");
    this.menuService.setBackIcon(false);
    
    this.userService.getUser(localStorage.getItem('userId')).subscribe((data) => {
      this.user = data;
      this.loading = false;
    });
  }

  ngOnInit(): void {
  }

  logOut(): void{
    localStorage.clear();
  }
}
