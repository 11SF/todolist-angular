import { Component, ViewChild } from '@angular/core';
import { TodoModel } from './todo-model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'todolistApp';
  text: string = 'to do list';
  textInput: string = '';
  list: TodoModel[] = [];
  @ViewChild('textbox') inputArea: any;

  addTodo(text: string, event: Event) {
    event.preventDefault();
    if (text.length !== 0) {
      this.list.push(new TodoModel(text));
      this.inputArea.nativeElement.value = '';
    }
  }

  changeStatus(i: number) {
    this.list[i].changeStatus();
    let a = this.list[i];
    this.list = this.list.filter((n, index) => index != i);
    this.list.push(a);
  }
  removeTodo(i: number) {
    this.list = this.list.filter((n, index) => index != i);
  }
}
