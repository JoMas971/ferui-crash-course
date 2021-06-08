import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  FuiCommonFormsModule,
  FuiDatagridModule,
  FuiInputModule,
  FuiNumberModule,
  FuiSelectModule,
  FuiWidgetModule
} from '@ferui/components';
import { DatagridWidgetComponent } from './datagrid-widget/datagrid-widget.component';
import { FormsWidgetComponent } from './forms-widget/forms-widget.component';
import { WelcomeWidgetComponent } from './welcome-widget/welcome-widget.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DatagridWidgetComponent,
    FormsWidgetComponent,
    WelcomeWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FuiWidgetModule,
    FuiDatagridModule,
    FuiCommonFormsModule,
    FuiSelectModule,
    FuiInputModule,
    FuiNumberModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
