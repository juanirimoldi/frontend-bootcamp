import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { MenuService } from 'src/app/modules/api-rest/services/menu.service';
import { UserService } from 'src/app/modules/api-rest/services/user.service';
import { user } from '../../interfaces/user';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  viewName: string;
  backIcon: boolean;

  viewName$: Observable<string> = new Observable<string>(); 
  backIcon$: Observable<boolean> = new Observable<boolean>(); 

  user: user;
  
  menu = [
    {name: "Home", route: "", icon: "home"},
    {name: "My Projects", route: "my-projects", icon: "folder"},
    {name: "My Stories", route: "my-stories", icon: "comment"},
    {name: "Settings", route: "settings", icon: "settings"}, 
  ]
  
  constructor( private menuService: MenuService, 
    private userService: UserService) {

    this.viewName$ = this.menuService.getViewName$(); 
    this.viewName$.subscribe(viewName => this.viewName = viewName); 
    this.menuService.updateViewName("");

    this.backIcon$ = this.menuService.getBackIcon$(); 
    this.backIcon$.subscribe(backIcon => this.backIcon = backIcon); 
    this.menuService.setBackIcon(false);

    this.userService.getUser(localStorage.getItem('userId')).subscribe((data) => {
      this.user = data;
    });
  }

  ngOnInit(): void{
  }

  back(): void {
    this.menuService.back();
  }
}