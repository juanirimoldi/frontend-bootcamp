import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MenuService } from 'src/app/modules/api-rest/services/menu.service';
import { StoriesService } from 'src/app/modules/api-rest/services/stories.service';
import { TasksService } from 'src/app/modules/api-rest/services/tasks.service';
import { story } from '../../interfaces/story';
import { task } from '../../interfaces/task';
import { AddTaskDialogComponent } from '../add-task-dialog/add-task-dialog.component';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  story: story;
  tasks: task[];
  loading = false;
  
  constructor(private route: ActivatedRoute, private storiesService: StoriesService, 
    private menuService: MenuService, private tasksService: TasksService, public dialog: MatDialog) { 

    this.loading = true;  
    const storyId = Number(this.route.snapshot.paramMap.get('story-j'));

    this.storiesService.getStory(storyId).subscribe(story => {
      this.story = story.data[0];
    
      this.tasksService.getStoryTasks(storyId).subscribe(tasks =>{
        this.tasks = tasks.data;
        
        this.menuService.updateViewName(this.story.name);
        this.menuService.setBackIcon(true);

        this.loading = false;
      });
    });
  }

  ngOnInit(): void {
  }

  openAddTaskDialog(): void {
    const dialogRef = this.dialog.open(AddTaskDialogComponent,
      {
        data: {
          storyId: this.story._id
        }
      }
      );
      dialogRef.afterClosed().subscribe(task => {
        if(task){
          this.tasksService.addTask(task).subscribe(
            response => {
              if(response.success)
                this.tasks.push(task);
            }
          );
        }
      });
  }

  deleteTask(task: task):void{
    const i = this.tasks.lastIndexOf(task); 
    this.tasks.splice(i,1);
  }
}

