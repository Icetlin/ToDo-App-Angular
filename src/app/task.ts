export class Task {
  constructor(  public id:number,
                public date:string,
                public list:string,
                public value:string,
                public checked:boolean,
                public favorites:boolean,
                public selected:boolean,
                ) {
    this.id = id;
    this.date = date;
    this.list = list;
    this.value = value;
    this.checked = checked;
    this.favorites = favorites;
    this.selected = selected;
  }
}
