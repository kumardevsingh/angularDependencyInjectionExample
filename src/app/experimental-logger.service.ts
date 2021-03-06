import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root'
})
export class ExperimentalLoggerService implements Logger {

  constructor() { }
  prefix: string = 'root';

  log(msg: string) {
    console.log(`${this.prefix} (experimental) : ${msg}`);
  }
}
