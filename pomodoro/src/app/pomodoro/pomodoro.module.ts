import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PomodoroComponent } from './pomodoro.component';
import { HomeComponent } from './home/home.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { DialogComponent } from './dialog/dialog.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskReportComponent } from './task-report/task-report.component';
import { TomatoChartComponent } from './tomato-chart/tomato-chart.component';
import { TomatoCountComponent } from './tomato-count/tomato-count.component';

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
    TomatoCountComponent
  ]
})
export class PomodoroModule {}
