import { Pipe, PipeTransform } from '@angular/core';
import {Task} from "./task";

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(value:any, type:string): number {
    let filteredTasks: Task[] = [];

    if(type === 'favorites'){
      for (let task of value) {
        if (task.favorites) {
          filteredTasks.push(task);
        }
      }
    }

    else if(type === 'checked'){
      for (let task of value) {
        if (task.checked) {
          filteredTasks.push(task);
        }
      }
    }

    else if(type === 'list'){
      for (let task of value) {
        if (task.list === 'list') {
          filteredTasks.push(task);
        }
      }
    }



    return filteredTasks.length;
  }
}
