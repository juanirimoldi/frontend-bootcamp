import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuService } from 'src/app/modules/api-rest/services/menu.service';
import { ProjectsService } from 'src/app/modules/api-rest/services/projects.service';
import { project } from '../../interfaces/project';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: project[];
  loading = false;

  @Output() projectEvent = new EventEmitter<project>();

  constructor(private projectService: ProjectsService, private menuService: MenuService) {
    this.loading = true;
    this.projectService.getProjects().subscribe(data => { 
        this.projects = data.data; 
        this.menuService.updateViewName("My Projects");
        this.menuService.setBackIcon(false);
        
      this.loading = false;
      }
		);
   }

  ngOnInit(): void {
  }

}


