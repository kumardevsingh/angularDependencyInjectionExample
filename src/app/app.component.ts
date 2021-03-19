import { Component, Optional, Self, SkipSelf } from '@angular/core';
import { ExperimentalLoggerService } from './experimental-logger.service';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{
    provide: LoggerService,
    //useClass: ExperimentalLoggerService
    useExisting: ExperimentalLoggerService
  }]
})
export class AppComponent {
  constructor(@Self() private logger: LoggerService,
    @SkipSelf() private parentLogger: LoggerService,
    private experimentalService: ExperimentalLoggerService) {
    if (this.logger) {
      this.logger.prefix = "App Component"
      this.logger.log('cunstructor executed !!');

    }
    if (this.parentLogger) {
      // this.parentLogger.prefix = "Parent Logger Prefix";
      this.parentLogger.log("Parent logger");
    }


  }

  title = 'angularDependency';
  ngOnInit(): void {
    this.experimentalService.log("==========This is experimental from app component======");
    console.log("is instance the same :", this.logger === this.experimentalService);
  }
}
