import { Component } from '@angular/core';
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-new-task-list',
  templateUrl: './new-task-list.component.html',
  styleUrls: ['./new-task-list.component.css']
})
export class NewTaskListComponent {

  constructor(private tasksService:TasksService) {
  }
  inputValue!:string;
  colorOfNewList!:string;
  formGroup: any;

  createTaskList():void{
    if(this.inputValue.length != 0){
      this.tasksService.createTaskList(this.inputValue, this.colorOfNewList);
      this.inputValue = '';
      this.colorOfNewList = 'white';
    }
  }

}
