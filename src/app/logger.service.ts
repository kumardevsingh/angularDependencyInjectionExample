import { Injectable } from '@angular/core';
import { ExperimentalLoggerService } from './experimental-logger.service';
import { Logger } from './logger';

@Injectable({
  providedIn: "root",
  // useClass: ExperimentalLoggerService 
})
export class LoggerService implements Logger {
  prefix = "root";
  constructor() { }

  log(msg: string) {
    console.log(`${this.prefix}: ${msg}`);
  }
}
