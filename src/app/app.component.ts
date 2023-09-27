import { Component, DoCheck, OnInit } from '@angular/core';
import { Task } from './task/task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements DoCheck, OnInit {
  title = 'taskManagerAngular';
  taskList:Task[] = [];
  disableSortBtn = false;

  removeTask(id:number) {
    this.taskList = this.taskList.filter(item => {
      return item.id != id;
    });
    localStorage.setItem('savedTasks', JSON.stringify(this.taskList));
  }
  removeTasks(group:string) {
    switch (group) {
      case 'done':
        this.taskList = this.taskList.filter(item => {
          return item.state != group;
        });
        break;
      case 'all': default:
        this.taskList = [];
        break;
    }
    localStorage.setItem('savedTasks', JSON.stringify(this.taskList));
  }
  sortTasks() {
    let ongoingTasks = this.taskList.filter(item => item.state == 'ongoing');
    let pendingTasks = this.taskList.filter(item => item.state == 'pending');
    let doneTasks = this.taskList.filter(item => item.state == 'done');
    this.taskList = [...ongoingTasks, ...pendingTasks, ...doneTasks];
  }

  ngOnInit() {
    if (localStorage.getItem('savedTasks')) {
      this.taskList = JSON.parse(localStorage.getItem('savedTasks')!);
    }
  }
  ngDoCheck() {
    this.disableSortBtn = this.taskList?.length > 1 ? false : true;
  }
}
