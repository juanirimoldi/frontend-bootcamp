import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpicsService } from 'src/app/modules/api-rest/services/epics.service';
import { MenuService } from 'src/app/modules/api-rest/services/menu.service';
import { ProjectsService } from 'src/app/modules/api-rest/services/projects.service';
import { StoriesService } from 'src/app/modules/api-rest/services/stories.service';
import { epic } from '../../interfaces/epic';
import { project } from '../../interfaces/project';
import { story } from '../../interfaces/story';

@Component({
  selector: 'epic-stories',
  templateUrl: './epic-stories.component.html',
  styleUrls: ['./epic-stories.component.css']
})
export class EpicStoriesComponent implements OnInit {

  stories: story[];
  epic: epic;
  project: project;  
  loading = false;

  constructor(private storiesService: StoriesService, private epicsService: EpicsService, 
    private projectService: ProjectsService, private menuService: MenuService, private route: ActivatedRoute) {

    this.loading = true;
    const project = Number(this.route.snapshot.paramMap.get('project-n'));
    const epic = Number(this.route.snapshot.paramMap.get('epic-k'));

    this.projectService.getProject(project).subscribe(project => {
      this.project = project.data[0];

      this.epicsService.getEpic(epic).subscribe(epic => {
        this.epic = epic.data[0];
      
        this.storiesService.getEpicStories(this.epic.id).subscribe(stories => {
          this.stories = stories.data;
    
          this.menuService.updateViewName(this.project.name+' > '+this.epic.name);
          this.menuService.setBackIcon(true);

          this.loading = false;
        });
      });
    }); 
  }

  ngOnInit(): void {
  }

}
