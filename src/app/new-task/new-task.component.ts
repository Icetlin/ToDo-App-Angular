import {Component, Input, OnInit} from '@angular/core';
import { TasksService } from "../tasks.service";
import {Task} from "../task";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit{
  private routeSub!: Subscription;

  constructor(private tasksService:TasksService, private route: ActivatedRoute) {
  }
  currentDate = new Intl.DateTimeFormat("ru", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date());

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.tasksType = params['type'];
    });
  }

  inputValue!:string;
  favorites:boolean = false;
  newTaskPlaceholder = 'Добавить задачу';
  tasksType!:string;




  clearInput():void{
    this.inputValue = ''
  }

  newFavoritesToggle():boolean {
    this.tasksService.newFavoritesToggle();

    this.favorites = !this.favorites
    return this.favorites
  }

  favoritesToggle(id:Task['id']) {
    this.tasksService.favoritesToggle(id);
  }
  createTask():void {
    if (this.inputValue.length != 0) {
      if(this.tasksType === 'all' || this.tasksType === 'favorites' || this.tasksType === 'checked'){
        this.tasksService.createTask(this.currentDate, '', this.inputValue);
        this.clearInput();
      }
      else{
        this.tasksService.createTask(this.currentDate, this.tasksType, this.inputValue);
        this.clearInput();
      }
    }
  }



}
