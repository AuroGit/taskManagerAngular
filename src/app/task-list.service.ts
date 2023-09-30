import { Injectable } from '@angular/core';

export class Task {
  id:number = 0;
  taskTitle:string = '';
  state:string = '';
}

@Injectable({
  providedIn: 'root'
})
export class TaskListService {
  constructor() { }

  taskList:Task[] = [{id:1, taskTitle:'task', state:'ongoing'}];

  add(text:string) {
    if (!text.trim()) return;

    this.taskList.push({
      id: Date.now(), 
      taskTitle: text.trim(),
      state: 'pending'
    });
    this.store();
  }
  remove(task?:Task, group?:string) {
  
    if (task) this.taskList = this.taskList.filter(item => item.id != task.id);

    if (group) {
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
    }
    this.store();
  }
  update(task:Task, state?:string) {
    if (state) task.state = state;
    else {
      let newTitle = prompt('Escribe un nuevo nombre para tarea:');
      newTitle?.toString();
      if (newTitle?.trim()) task.taskTitle = newTitle;
    }
    this.store();
  }
  store() {
    localStorage.setItem('savedTasks', 
      JSON.stringify(this.taskList));
  }
  sort() {
    let ongoingTasks = this.taskList.filter(item => item.state == 'ongoing');
    let pendingTasks = this.taskList.filter(item => item.state == 'pending');
    let doneTasks = this.taskList.filter(item => item.state == 'done');
    this.taskList = [...ongoingTasks, ...pendingTasks, ...doneTasks];
    
    this.store();
  }
  load() {
    if (localStorage.getItem('savedTasks')) {
      this.taskList = JSON.parse(localStorage.getItem('savedTasks')!);
    }
  }
}
