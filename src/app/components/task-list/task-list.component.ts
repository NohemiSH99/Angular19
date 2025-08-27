import { Component, effect, OnInit } from '@angular/core';
import { TableGenericComponent } from "../table-generic/table-generic.component";
import { ITableConfig } from '../../models/table-config.model';
import { TaskModel } from '../../models/task.model';
import { TaskServiceService } from '../../services/task.service.service';
import { map, Subscription } from 'rxjs';
import { ToolbarGenericComponent } from "../toolbar-generic/toolbar-generic.component";
import {MatCardModule} from '@angular/material/card';
import { DialogService } from '../../services/dialog.service';
import { DialogData } from '../../models/dialog-data';
import { DISPLAYEDCOLUMNSTASK } from '../../constants/displayed-columns';
import { CommonMethodsService } from '../../services/common-methods.service';

@Component({
  selector: 'app-task-list',
  imports: [
    TableGenericComponent, 
    ToolbarGenericComponent,
    MatCardModule
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit{
  tableConfig!:  ITableConfig<TaskModel>; 
  taskSubscription!: Subscription;
  dataSource!: TaskModel[]; 
  title: string = ""; 

  constructor(
    private taskService: TaskServiceService,
    private dialogService: DialogService,
    private commonMethods: CommonMethodsService
  ){
    this.confirmOption();
  }

  ngOnInit(): void { 
    this.tableConfig = {
      data: [],
      displayedColumns: DISPLAYEDCOLUMNSTASK,
      headers: [
        "id",
        "title",
        "status"
      ]
    };
    this.title = "Lista de tareas"; 
    this.getAllTask();
  }

  getAllTask(){
    this.taskSubscription = this.taskService
    .getListTask()
    .pipe(
      map(y=> this.mappingClass(y)),
      map(x=> this.mappingStatus(x))
    )
    .subscribe({
      next: (res)=>{
        if(res){
          this.dataSource = JSON.parse(JSON.stringify(res));
          this.tableConfig.data = JSON.parse(JSON.stringify(res));
        }
      },
      complete: () =>{

      },
      error: (err)=>{
        this.dataSource = []; 
      }
    })
  }
  
  mappingClass(
    data: TaskModel[]
  ): TaskModel[]{
    if(!data) return []
    return data.map(item=>{
      return {
        ...item, 
        class: this.commonMethods.returnValueOfCondition(item.completed,'success', 'button-red')
      }
    })
  }

  mappingStatus(
    data: TaskModel[]
  ): TaskModel[]{
    if(!data) return []
    return data.map(item=>{
      return {
        ...item, 
        status: item.completed?'Si': 'No'
      }
    })
  }

  clickStatus(
    data: { status: string; row: any; }
  ): void{
    let dataForDialog = this.buildData(data.status, data.row); 
    this.dialogService.openDialog(dataForDialog); 
  }

  buildData(
    value : string,
    row: TaskModel
  ): DialogData<TaskModel>{
    const actualStatus = value === 'Si' ? 'Completado':'Incompleto'; 
    const newStatus = value === 'Si' ? 'Incompleto':'Completado';
    return {
      optionFalse: 'Cancelar', 
      optionTrue: 'Aceptar',
      question: `¿Desea cambiar el estatus de ${actualStatus} a ${newStatus}?`,
      title: 'Cambio de estatus',
      row: row
    }
  }

  confirmOption():void{
    effect(()=>{
      const id = this.dialogService.aceptSignal();
      if(id!==-1){
        this.updateRow(id); 
      }
    })
  }

  updateRow(
    id: number
  ): void{
    const index = this.dataSource.findIndex(item=>item.id === id); 
    if(index !==-1 ){
      this.dataSource[index] = {
        ...this.dataSource[index],
        status: this.dataSource[index].status === 'Si'? 'No': 'Si',
        completed: !this.dataSource[index].completed,
        class: this.dataSource[index].completed ? 'button-red': 'success'
      };

      this.tableConfig.data = JSON.parse(JSON.stringify(this.dataSource));
    }
  }
}
