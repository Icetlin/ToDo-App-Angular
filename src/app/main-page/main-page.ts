import {Component, Input, ViewChild, OnInit, HostListener} from '@angular/core';
import { TasksService } from '../tasks.service'
import {Task} from "../task";
import {Observable, Observer, Subject, Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.html',
  styleUrls: ['./main-page.css']
})
export class MainPage implements OnInit{
  private routeSub!: Subscription;

  constructor(private tasksService:TasksService, private route: ActivatedRoute) {
  }

  tasks = this.tasksService.tasks;
  taskLists = this.tasksService.taskLists;
  tasksType!:string;
  selected!:boolean;

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.tasksType = params['type'];
    });
  }

  deleteAllTasks(){
    this.tasksService.deleteAllTasks()
  }

  favoritesToggle(id:Task['id']) {
    this.tasksService.favoritesToggle(id);
    window.scrollTo(0,0)
  }

  selectedToggle(id:Task['id']){
    this.tasksService.selectedToggle(id);
  }

  changeTaskStatus(id:Task['id'], changeFrom:boolean){
    this.tasksService.changeTaskStatus(id, changeFrom);
  }

  @HostListener("window:beforeunload") toLocalStorage(){
    this.tasksService.tasksToLocalStorage();
    this.tasksService.taskListsToLocalStorage();
  }

  @HostListener("window:load") localStorageTo(){
    this.tasksService.localStorageToTasks();
    this.tasksService.localStorageToTaskLists();
  }


}
