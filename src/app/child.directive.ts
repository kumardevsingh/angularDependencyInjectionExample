import { Directive, Host } from '@angular/core';
import { LoggerService } from './logger.service';

@Directive({
  selector: '[appChild]'
})
export class ChildDirective {

  constructor(@Host() private logger: LoggerService) {
    if (this.logger) {
      //this.logger.prefix = "Child prefix"
      this.logger.log('child directive cunstructor executed !!');

    }
  }

}
