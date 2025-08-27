import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogData } from '../../models/dialog-data';
import { MatButtonModule } from '@angular/material/button';
import { DialogService } from '../../services/dialog.service';import { TaskModel } from '../../models/task.model';
1

@Component({
  selector: 'app-dialog',
  imports: [
    MatDialogModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatButtonModule
  ],
  standalone: true,
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent implements OnInit{
  title: string = ''; 
  question: string = ''; 
  optionTrue: string = ''; 
  optionFalse: string = ''; 

  constructor(
    private dialogService: DialogService,
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData<TaskModel>
  ){

  }

  ngOnInit(): void {
    if(this.data){
      this.optionFalse = this.data.optionFalse; 
      this.optionTrue = this.data.optionTrue; 
      this.question = this.data.question; 
      this.title = this.data.title; 
    }
  }

  cancel(): void{
    this.dialogRef.close();
  }

  accept(
    id: number
  ): void{
    this.dialogService.aceptDialog(id); 
  }
}
