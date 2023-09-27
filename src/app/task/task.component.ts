import { Component, DoCheck, ElementRef, EventEmitter, 
  Input, OnInit, Output, ViewChild } from '@angular/core';

export class Task {
  id:number = 0;
  taskTitle:string = '';
  state:string = '';
}

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit, DoCheck {
  @Input() task:Task;
  @Input() taskList:Task[];
  @Output() removeTaskEvent = new EventEmitter<number>();
  @ViewChild('taskText') taskText:ElementRef;

  hasScroll:string;
  setScrollable() {
    this.taskText?.nativeElement.scrollWidth > this.taskText?.nativeElement.clientWidth 
    ? this.hasScroll = 'scroll' : this.hasScroll = '';
  }
  
  handleChange(val:string) {
    this.task.state = val;
    localStorage.setItem('savedTasks', JSON.stringify(this.taskList));
  }
  removeTask(id:number) { this.removeTaskEvent.emit(id); }
  renameTask() {
    let newTitle = prompt('Escribe un nuevo nombre para tarea:');
    newTitle?.toString();
    if (newTitle?.trim()) this.task.taskTitle = newTitle;
    localStorage.setItem('savedTasks', JSON.stringify(this.taskList));
    setTimeout(() => this.setScrollable(), 1); //Apaño provisional
  }
  showFullTitle() { alert(this.task.taskTitle) }

  ngOnInit() { setTimeout(() => this.setScrollable(), 10) }
  ngDoCheck() { this.setScrollable() }
}
