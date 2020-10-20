import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url = '/assets/data/todos.json';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }
}
