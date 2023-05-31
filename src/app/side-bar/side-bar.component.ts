import { Component, OnInit } from '@angular/core';
import {TasksService} from "../tasks.service";
import {Task} from "../task";
import {of, Subscription} from "rxjs";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent{

  constructor(private tasksService:TasksService) {
  }

  tasks = this.tasksService.tasks;

  clearSelected(){
    this.tasksService.clearSelected()
  }

}
