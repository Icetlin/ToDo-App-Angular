import { Injectable } from '@angular/core';
import { Task } from './task';
import {TaskList} from "./taskList";
import {Observable, of, Subject, Subscription} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() {
  }
  tasks:Task[] = [];
  taskLists:TaskList[] = [];
  favorites = false;


  newFavoritesToggle(){
    this.favorites = !this.favorites;
    return this.favorites;
  }

  createTask(date:string, list:string, value:string){
    let newTask = new Task(this.tasks.length,date,list,value, false, this.favorites, false);
    this.tasks.push(newTask);

  }

  deleteTask(id: Task['id']){
    const index = this.tasks.findIndex(task => {
      return task.id === id;
    })
    this.tasks.splice(index,1);
  }

  changeTaskStatus(id:Task['id'], changeFrom:boolean){
    const task = this.tasks.find(obj => {
     return  obj.id === id;
    })
   task!.checked = !task!.checked;
  }

  favoritesToggle(id:Task['id']){
    const task = this.tasks.find(obj => {
      return  obj.id === id;
    })
    task!.favorites = !task!.favorites;
  }

  selectedToggle(id:Task['id']){
    this.tasks.map(task => task.selected = false);
    const task = this.tasks.find(obj => {
      return  obj.id === id;
    })
    task!.selected = !task!.selected;
  }

  clearSelected(){
    this.tasks.map(task => task.selected = false);
  }
  deleteAllTasks(){
    this.tasks.length = 0;
  }

  createTaskList(taskListValue:TaskList['value'], taskListColor:TaskList['color']){
    let newTaskList = new TaskList(
      this.taskLists.length,
      taskListValue,
      taskListColor,
      false)
    this.taskLists.push(newTaskList)
  }

  deleteTaskList(taskListId:TaskList['id']){
    const index = this.taskLists.findIndex(taskList => {
      return taskList.id === taskListId;
    })
    this.taskLists.splice(index,1);
  }

  deleteAllTaskLists(){
    this.taskLists.length = 0;
  }

  tasksToLocalStorage(){
    localStorage.clear()
    const tasksJSON = JSON.stringify(this.tasks);
    localStorage.setItem('tasks', tasksJSON);
  }

  localStorageToTasks(){
    const tasksJSON = localStorage.getItem('tasks')!;
    const tasks = JSON.parse(tasksJSON);
    for (let task of tasks){
      this.tasks.push(task)
    }
  }

  taskListsToLocalStorage(){
    const taskListsJSON = JSON.stringify(this.taskLists);
    localStorage.setItem('taskLists', taskListsJSON);
  }
  localStorageToTaskLists(){
    const taskListsJSON = localStorage.getItem('taskLists')!;
    const taskLists = JSON.parse(taskListsJSON);
    for (let taskList of taskLists){
      this.taskLists.push(taskList);
    }
  }
}
