export class TaskList {
  constructor(  public id:number,
                public value:string,
                public color:string,
                public selected:boolean,
                ) {
    this.id = id;
    this.value = value;
    this.color = color,
    this.selected = selected;
  }
}
