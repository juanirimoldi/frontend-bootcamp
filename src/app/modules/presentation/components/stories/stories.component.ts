import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EpicsService } from 'src/app/modules/api-rest/services/epics.service';
import { MenuService } from 'src/app/modules/api-rest/services/menu.service';
import { ProjectsService } from 'src/app/modules/api-rest/services/projects.service';
import { StoriesService } from 'src/app/modules/api-rest/services/stories.service';
import { epic } from '../../interfaces/epic';
import { project } from '../../interfaces/project';
import { story } from '../../interfaces/story';

@Component({
  selector: 'stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  stories: story[];
  project: project;
  epics: epic[];
  epic: epic;
  loading = false;
  
  constructor(private menuService: MenuService, private storiesService: StoriesService, private epicsService: EpicsService, 
    private projectsService: ProjectsService, private router: Router) { 
    
    this.loading = true;

    this.storiesService.getStories().subscribe(stories => {
    this.stories = stories.data;

    this.menuService.updateViewName("My Stories");
    this.menuService.setBackIcon(false);
    this.loading = false;
    })
  }

  ngOnInit(): void {
  }
}
