import { Todo } from './../shared/models/todo';
import { Component , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-list-item-component',
  templateUrl: './todo-list-item-component.component.html'
})
export class TodoListItemComponentComponent {

  @Input() todo:Todo;
  @Output() trashEvent = new EventEmitter<Todo>();

  constructor() { 

  }

  onTrash(){
    this.trashEvent.emit(this.todo);
  }

  onDone(){
    this.todo.isDone = !this.todo.isDone;
  }

}
