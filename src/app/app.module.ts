import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { RequestDonarComponent } from './nested/request-donar/request-donar.component';
import { SendDonarComponent } from './nested/send-donar/send-donar.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestDonarComponent,
    SendDonarComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
