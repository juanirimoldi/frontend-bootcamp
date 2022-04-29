import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TasksService } from 'src/app/modules/api-rest/services/tasks.service';
import { task } from '../../interfaces/task';
import { DeleteTaskDialogComponent } from '../delete-task-dialog/delete-task-dialog.component';


@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {


  @Input() task: task;
  
  @Output() deleteTaskEvent = new EventEmitter<task>();
  
  constructor(public dialog: MatDialog, private tasksService: TasksService) { }

  ngOnInit(): void {
  }  

  openDeleteTaskDialog(): void {
    const dialogRef = this.dialog.open(DeleteTaskDialogComponent,
      {
        data: {
          task: this.task
        }
      }
      );
      dialogRef.afterClosed().subscribe(task => {
        if(task !== undefined)
          this.tasksService.deleteTask(task).subscribe( response =>
            {
              if (response.success)
                this.deleteTaskEvent.emit(task);
            });
      });
  }
}
