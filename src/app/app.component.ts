import { Component } from '@angular/core';
import { TodoItem } from './model/todoItem';
import { TodoList } from './model/todoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private list = new TodoList('Amr Abdalfatah', [
    new TodoItem('Go to Gym', true),
    new TodoItem('Go for Run'),
    new TodoItem('Go to Cinema'),
  ]);

  get username(): string {
    return this.list.user;
  }

  get itemcount(): number {
    return this.list.items.filter(item => !item.complete).length;
  }
}
