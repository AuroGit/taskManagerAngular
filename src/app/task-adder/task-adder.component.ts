import { Component, Input } from '@angular/core';
import { Task } from '../task/task.component';

@Component({
  selector: 'task-adder',
  templateUrl: './task-adder.component.html',
  styleUrls: ['./task-adder.component.css']
})
export class TaskAdderComponent {
  @Input() taskList:Task[];

  inputVal = '';

  addTask(input:string){
    if (!input) return;

    this.taskList.push({
      id: Date.now(), 
      taskTitle: input.trim(),
      state: 'pending'
    });

    this.inputVal = '';

    localStorage.setItem('savedTasks', JSON.stringify(this.taskList));
  }
}
