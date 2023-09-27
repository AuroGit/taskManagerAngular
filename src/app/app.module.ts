import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskAdderComponent } from './task-adder/task-adder.component';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from './task/task.component';
import { ClearListComponent } from './clear-list/clear-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskAdderComponent,
    TaskComponent,
    ClearListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
