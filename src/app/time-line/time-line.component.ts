import { Component, OnInit } from '@angular/core';
import { TimeScaleService } from '../time-scale/time-scale.service';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {

  constructor(private scaleService: TimeScaleService) { }

  hourWidthStr: String;
  barWidthStr: String;
  hours: number[] = Array(24);

  ngOnInit() {
    const hourWidth = this.scaleService.getScale() * 60;
    this.hourWidthStr = '' + hourWidth + 'px';

    const barWidth = hourWidth * 24;
    this.barWidthStr = '' + barWidth + 'px';
    for (let i = 0;  i < 24; i++) {
      this.hours[i] = i;
    }
  }
}
