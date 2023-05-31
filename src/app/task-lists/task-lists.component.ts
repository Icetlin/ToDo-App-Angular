import {Component, HostListener} from '@angular/core';
import {TasksService} from "../tasks.service";
import {TaskList} from "../taskList";
@Component({
  selector: 'app-task-lists',
  templateUrl: './task-lists.component.html',
  styleUrls: ['./task-lists.component.css']
})
export class TaskListsComponent {
  constructor(private tasksService:TasksService) {
  }

  taskLists = this.tasksService.taskLists;

  deleteTaskList(taskListId:TaskList['id']){
    this.tasksService.deleteTaskList(taskListId);
  }

  deleteAllTaskLists(){
    this.tasksService.deleteAllTaskLists();
  }
}
