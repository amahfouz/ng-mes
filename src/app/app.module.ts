import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { TimeScaleService } from './time-scale/time-scale.service';
import { PeriodComponent } from './period/period.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeLineComponent,
    PeriodComponent
],
  imports: [
    BrowserModule
  ],
  providers: [TimeScaleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
