import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Self } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstLevelDependencyComponent } from './first-level-dependency/first-level-dependency.component';
import { LoggerService } from './logger.service';
import { ParentDirective } from './parent.directive';
import { ChildDirective } from './child.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstLevelDependencyComponent,
    ParentDirective,
    ChildDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(@Self() private logger: LoggerService) {
  //   if (this.logger) {
  //     this.logger.log('cunstructor executed !!');

  //   }
  // }
}
