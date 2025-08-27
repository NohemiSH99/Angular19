import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ITableConfig } from '../../models/table-config.model';
import { TaskModel } from '../../models/task.model';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-table-generic',
  imports: [
    MatTableModule,
    MatIconModule,
    CommonModule,
    MatPaginatorModule
  ],
  standalone: true,
  templateUrl: './table-generic.component.html',
  styleUrl: './table-generic.component.scss'
})
export class TableGenericComponent<T> implements OnInit{
  @Input() tableConfig!:  ITableConfig<TaskModel>; 
  @Output() clickButtonEmmiter = new EventEmitter<{status: string, row:T}>();
  length : number = 0;
  pageSize: number = 10;
  pageIndex: number = 0;
  pageSizeOptions : number[] = [5, 10, 25];

  ngOnInit(): void {
    this.length = this.tableConfig.data.length; 
  }

  actionButton(
    value: string,
    row: T
  ): void{
    this.clickButtonEmmiter.emit({status:value, row: row});
  }
}
