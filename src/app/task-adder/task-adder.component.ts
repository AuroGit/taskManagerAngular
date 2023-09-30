import { Component } from '@angular/core';
import { TaskListService } from '../task-list.service';

@Component({
  selector: 'task-adder',
  templateUrl: './task-adder.component.html',
  styleUrls: ['./task-adder.component.css']
})
export class TaskAdderComponent {
  
  constructor(public taskListService:TaskListService) {}

  inputVal = '';

  addTask(input:string){
    this.taskListService.add(input.trim());
    this.inputVal = '';
  }
}
