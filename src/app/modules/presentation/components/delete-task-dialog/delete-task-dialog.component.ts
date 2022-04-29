import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { task } from '../../interfaces/task';

@Component({
  selector: 'delete-task-dialog',
  templateUrl: './delete-task-dialog.component.html',
  styleUrls: ['./delete-task-dialog.component.css']
})
export class DeleteTaskDialogComponent implements OnInit {

  myForm: FormGroup;
  constructor(
    private fb: FormBuilder, 
    public dialogRef: MatDialogRef<DeleteTaskDialogComponent>,    
    @Inject(MAT_DIALOG_DATA) public data:{
      task: task;
    }
    ) { }


  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('',[Validators.minLength(10)])
    });
  }

  deleteTask(): void{
    this.dialogRef.close(this.data.task);
  }
}
