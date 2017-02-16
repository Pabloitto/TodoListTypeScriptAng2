import { Todo } from './../models/todo';
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable()
export class TodoService {

    constructor(private _http: Http) {

    }

    postTodo(todo: Todo) {
        let url = "http://localhost:4800/api/todos";
        return this._http.post(url, todo)
            .map((res: Response) => <boolean>res.json());
    }

    updateTodo(todo: Todo) {
        let url = "http://localhost:4800/api/todos";
        return this._http.patch(url, todo)
            .map((res: Response) => <boolean>res.json());
    }

    deleteTodo(todo: Todo) {
        let url = `http://localhost:4800/api/todos/${todo.description}`;
        return this._http.delete(url)
            .map((res: Response) => <boolean>res.json());
    }

    getTodos() {
        return this._http.get("http://localhost:4800/api/todos")
            .map((res: Response) => <Array<Todo>>res.json());
    }
}