import {Component, ElementRef, OnInit, Renderer2, RendererFactory2} from '@angular/core';
import {Subscription} from "rxjs";
import {TasksService} from "../tasks.service";
import {ActivatedRoute} from "@angular/router";
import {Task} from "../task";
import { Overlay, OverlayRef } from "@angular/cdk/overlay";


@Component({
  selector: 'app-detailed-task',
  templateUrl: './detailed-task.component.html',
  styleUrls: ['./detailed-task.component.css']
})
export class DetailedTaskComponent implements OnInit{

  private routeSub!: Subscription;

  constructor(private tasksService:TasksService,
              private route: ActivatedRoute,
              private renderer: Renderer2) {
  }
  selectedId!:number;
  isDeleteConfirmationOpened = false;

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.selectedId = parseInt(params['taskId']);
    });

  }

   tasks = this.tasksService.tasks;


  deleteTask(id:Task['id']) {
    this.isDeleteConfirmationOpened = false;
    this.tasksService.deleteTask(id);
  }

  deleteAllTasks(){
    this.tasksService.deleteAllTasks()
  }

  changeTaskStatus(id:Task['id'], changeFrom:boolean){
    this.tasksService.changeTaskStatus(id, changeFrom);
  }

  favoritesToggle(id:Task['id']) {
    this.tasksService.favoritesToggle(id);
  }
}

