import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PomodoroModule } from './pomodoro/pomodoro.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PomodoroModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
