import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskListService } from './task-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements DoCheck, OnInit {
  
  constructor(public taskListService:TaskListService) {}

  title = 'taskManagerAngular';
  disableSortBtn = false;

  sortTasks() { this.taskListService.sort() }

  ngOnInit() { this.taskListService.load() }
  ngDoCheck() {
    this.disableSortBtn = this.taskListService.taskList.length > 1 
    ? false : true;
  }
}
