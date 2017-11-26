import { Injectable } from '@angular/core';

@Injectable()
export class TimeScaleService {

    constructor() { }

    // return number of pixels for every minute
    getScale(): number {
        return 0.5;
    }
}
