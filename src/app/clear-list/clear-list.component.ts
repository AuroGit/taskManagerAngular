import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'clear-list',
  templateUrl: './clear-list.component.html',
  styleUrls: ['./clear-list.component.css']
})

export class ClearListComponent {
  @Output() removeEvent = new EventEmitter<string>();

  removeTasksEvent(event:string) {
    this.removeEvent.emit(event);
  }
}
