import { inject, Injectable, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogData } from '../models/dialog-data';
import { DialogComponent } from '../components/dialog/dialog.component';
import { TaskModel } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  readonly dialog = inject(MatDialog);
  private aceptDialogSignal = signal(-1); 
  readonly aceptSignal = this.aceptDialogSignal.asReadonly();

  constructor() { }

  openDialog(
    data: DialogData<TaskModel>
  ): void{
    this.dialog.open(DialogComponent, {
      width: '327px',
      data: data
    });
  }

  aceptDialog(
    id: number
  ):void{
    this.aceptDialogSignal.set(id);
  }
}
