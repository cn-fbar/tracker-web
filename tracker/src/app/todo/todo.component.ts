import {Component, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';
import {Todo} from '../todo';
import {Category} from '../category';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {

  todo: Todo[];
  todoName: string;
  idForTodo: number;
  todoCategory: '';

  selectedCategory: Category = new Category(1, 'Home');
  public categories = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'Office'},
    { id: 3, name: 'School'},
    { id: 4, name: 'Personal'},
    { id: 5, name: 'Shopping'}
  ];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.idForTodo = 11;
    this.todoName = '';
    this.todoService.getTodos()
      .subscribe(data => this.todo = data);
  }

  onSelect(event: any) {
    this.todoCategory = event.target.value;
    /*this.selectedCategory = null;
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].id === categoryId) {
        this.selectedCategory = this.categories[i];
      }
    }*/
  }

  addTodo(): void {
    if (this.todoName.trim().length === 0) {
      return;
    }
    this.todo.push({
      id: this.idForTodo,
      name: this.todoName,
      category: this.todoCategory,
      action: false,
      editing: false
    });
    this.idForTodo++;
    this.todoName = '';
  }

  editTodo(todo: Todo): void {
    todo.editing = true;
  }

  doneEditing(todo: Todo): void {
    todo.editing = false;
  }

  deleteTodo(id: number): void {
    this.todo = this.todo.filter(todo => todo.id !== id);
  }

}
