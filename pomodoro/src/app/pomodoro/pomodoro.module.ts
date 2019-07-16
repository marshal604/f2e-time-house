import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PomodoroComponent } from './pomodoro.component';
import { HomeComponent } from './home/home.component';
import { AddTaskComponent } from './side-bar/add-task/add-task.component';
import { DialogComponent } from './dialog/dialog.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TaskListComponent } from './side-bar/task-list/task-list.component';
import { TaskReportComponent } from './side-bar/task-report/task-report.component';
import { TomatoChartComponent } from './side-bar/task-report/tomato-chart/tomato-chart.component';
import { TomatoCountComponent } from './side-bar/task-report/tomato-count/tomato-count.component';
import { NoTaskComponent } from './home/no-task/no-task.component';
import { TaskComponent } from './home/task/task.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PomodoroComponent,
    HomeComponent,
    AddTaskComponent,
    DialogComponent,
    SideBarComponent,
    TaskListComponent,
    TaskReportComponent,
    TomatoChartComponent,
    TomatoCountComponent,
    NoTaskComponent,
    TaskComponent
  ]
})
export class PomodoroModule {}
