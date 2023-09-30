import { Component } from '@angular/core';
import { TaskListService } from '../task-list.service';

@Component({
  selector: 'clear-list',
  templateUrl: './clear-list.component.html',
  styleUrls: ['./clear-list.component.css']
})

export class ClearListComponent {

  constructor(public taskListService:TaskListService) {}

  removeTasks(group:string) {
    this.taskListService.remove(undefined, group);
  }
}
