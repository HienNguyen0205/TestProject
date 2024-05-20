import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { taskDef } from '../types';
import { ToDoService } from '../services/toDo.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.scss',
})
export class ToDoComponent implements OnInit {
  toDoList!: taskDef[];

  constructor(
    private toDoService: ToDoService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const userId = this.authService.getUserId();
    this.toDoService
      .getTaskByUser('https://jsonplaceholder.typicode.com/todos', { userId })
      .subscribe((res) => {
        console.log(res);
        this.toDoList = res;
        console.log(this.toDoList);
      });
  }

  handleDeleteToDo(id: number) {}

  handleChangeTaskStatus(id: number, completed: boolean) {
    this.toDoService
      .changeTaskStatus(
        'https://jsonplaceholder.typicode.com/todos',
        { id }, { completed }
      )
      .subscribe((res) => {
        console.log(res);
        const index = this.toDoList.findIndex((item) => item.id === id);
        this.toDoList[index].completed = completed;
      });
  }
}
