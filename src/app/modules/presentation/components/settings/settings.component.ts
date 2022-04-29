import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/modules/api-rest/services/menu.service';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private menuService: MenuService) { 
    this.menuService.updateViewName("Settings");
    this.menuService.setBackIcon(false);
  }

  ngOnInit(): void {
  }

}
