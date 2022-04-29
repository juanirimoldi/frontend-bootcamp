import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { task } from '../../interfaces/task';

@Component({
  selector: 'add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.css']
})
export class AddTaskDialogComponent implements OnInit {
  
  myForm: FormGroup;
 
  constructor( 
    private fb: FormBuilder, 
    public dialogRef: MatDialogRef<AddTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{
      storyId: string
    }
    ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('',[Validators.minLength(10)]),
      date: new FormControl()
    });
  }

  addTask(): void{
    let task: task = {
      done: false,
      _id: "",
      id: 0,
      name: this.myForm.get('name').value,
      description: this.myForm.get('description').value,
      story: this.data.storyId,
      created: "2022-02-07T21:44:50.568Z",
      due: this.myForm.get('date').value,
      __v: 0,
    }
    this.dialogRef.close(task);
  }
}
