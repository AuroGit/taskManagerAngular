import { Component, DoCheck, ElementRef, Input, OnInit, 
  ViewChild } from '@angular/core';
import { Task, TaskListService } from '../task-list.service';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit, DoCheck {
  
  constructor(public taskListService:TaskListService) {}

  @Input() task:Task;
  @ViewChild('taskText') taskText:ElementRef;

  hasScroll:string;
  setScrollable() {
    this.taskText?.nativeElement.scrollWidth > this.taskText?.nativeElement.clientWidth 
    ? this.hasScroll = 'scroll' : this.hasScroll = '';
  }
  
  handleChange(value:string) {
    this.taskListService.update(this.task, value);
  }
  removeTask(id:number) {
    this.taskListService.remove(this.task);
  }
  renameTask() {
    this.taskListService.update(this.task);
  }
  showFullTitle() { alert(this.task.taskTitle) }

  ngOnInit() { setTimeout(() => this.setScrollable(), 10) }
  ngDoCheck() { this.setScrollable() }
}
