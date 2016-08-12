import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { OtherComponent, AnotherComponent } from './other';
import { DatabindingComponent } from './databinding/databinding.component';
import { CustomBindingComponent } from './databinding/custom-binding.component';
import { EventBindingComponent } from './databinding/event-binding.component';
import { TwoWayBindingComponent } from './databinding/two-way-binding.component';
import {FormsModule} from '@angular/forms';
import { LifecycleComponent } from './lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    AnotherComponent,
    DatabindingComponent,
    CustomBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
