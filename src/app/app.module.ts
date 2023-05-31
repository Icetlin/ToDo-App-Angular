import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MainPage } from './main-page/main-page';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NewTaskComponent } from './new-task/new-task.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SelectedTaskComponent } from './selected-task/selected-task.component';
import { DetailedTaskComponent } from './detailed-task/detailed-task.component';
import {OverlayModule} from "@angular/cdk/overlay";
import { TaskListsComponent } from './task-lists/task-lists.component';
import { NewTaskListComponent } from './new-task-list/new-task-list.component';
import { FilterPipe } from './filter.pipe';
import { ColorPickerModule } from 'ngx-color-picker';





@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TopBarComponent,
    MainPage,
    NewTaskComponent,
    SelectedTaskComponent,
    DetailedTaskComponent,
    TaskListsComponent,
    NewTaskListComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    OverlayModule,
    RouterModule.forRoot([
      {path: "tasks/:type", component: MainPage},
      {path: "", redirectTo: 'tasks/all', pathMatch: 'full'},
      {path: "tasks", redirectTo: 'tasks/all', pathMatch: 'full'},
      {path: "tasks/:type/:taskId", component: SelectedTaskComponent},
    ]),
    ColorPickerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
