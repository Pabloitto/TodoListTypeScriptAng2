import { TodoService } from './shared/services/todo-service';
import { Todo } from './shared/models/todo';
import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [TodoService]
})
export class AppComponent implements OnInit {
  description: string;
  todos: Todo[];

  constructor(private _todoService: TodoService) {
    this.todos = new Array<Todo>();
  }

  ngOnInit() {
    this._todoService.getTodos()
      .subscribe(todos => this.todos = todos);
  }

  addTodo() {
    let todo = new Todo(this.description);
    this.todos.push(todo);
    this.description = "";
    this._todoService.postTodo(todo);
  }

}
