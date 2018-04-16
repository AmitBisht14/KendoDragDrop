import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@progress/kendo-angular-layout';

import { AppComponent } from './app.component';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule, BrowserAnimationsModule, SortableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
