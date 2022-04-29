import { Component, OnInit } from '@angular/core';
import { epic } from '../../interfaces/epic';
import { ActivatedRoute, Router } from '@angular/router';
import { project } from '../../interfaces/project';
import { EpicsService } from 'src/app/modules/api-rest/services/epics.service';
import { ProjectsService } from 'src/app/modules/api-rest/services/projects.service';
import { MenuService } from 'src/app/modules/api-rest/services/menu.service';

@Component({
  selector: 'epics',
  templateUrl: './epics.component.html',
  styleUrls: ['./epics.component.css']
})
export class EpicsComponent implements OnInit {

  epics: epic[];
  project: project;
  panelOpenState = false;
  loading = false;

  constructor(private epicsService: EpicsService, private projectService: ProjectsService, private menuService: MenuService, 
    private route: ActivatedRoute) { 
      this.loading = true;
    const project = Number(this.route.snapshot.paramMap.get('project-n'));

    this.epicsService.getProjectEpics(project).subscribe(data => {
      this.epics = data.data;

      this.projectService.getProject(project).subscribe(data => {
        this.project = data.data[0];
        this.menuService.setBackIcon(true);
        this.menuService.updateViewName(this.project.name);
  
        this.loading =false;
      });
    });
    }

  ngOnInit(): void {
  }
}
