import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ClickTrackingDirective } from './tracking/click-tracking.directive';
import { ChangeTrackingDirective } from './tracking/change-tracking.directive';
import { FormSubmitTrackingDirective } from './tracking/form-submit-tracking.directive';
import { MyErrorHandler } from './app-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    ClickTrackingDirective,
    ChangeTrackingDirective,
    FormSubmitTrackingDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: MyErrorHandler
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
