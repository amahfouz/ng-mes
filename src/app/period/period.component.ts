import { Component, OnInit, Input } from '@angular/core';
import { TimeScaleService } from '../time-scale/time-scale.service';

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.css']
})
export class PeriodComponent implements OnInit {

  @Input() startMinute: number;
  @Input() endMinute: number;

  constructor(private scaleService: TimeScaleService) { }

  pixelStartStr: String;
  pixelWidthStr: String;

  ngOnInit() {
    const scale = this.scaleService.getScale();

    const pixelStart = scale * this.startMinute;
    this.pixelStartStr = '' + pixelStart + 'px';

    const pixelWidth = (this.endMinute - this.startMinute) * scale;
    this.pixelWidthStr = '' + pixelWidth + 'px';
  }
}
