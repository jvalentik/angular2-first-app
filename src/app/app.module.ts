import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { OtherComponent, AnotherComponent } from './other';
import { DatabindingComponent } from './databinding/databinding.component';
import { CustomBindingComponent } from './databinding/custom-binding.component';
import { EventBindingComponent } from './databinding/event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    AnotherComponent,
    DatabindingComponent,
    CustomBindingComponent,
    EventBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
