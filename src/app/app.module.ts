import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {IgxTabsModule} from 'igniteui-angular';
import { IgxDataChartCoreModule, IgxNumericXAxisModule, IgxNumericYAxisModule } from 'igniteui-angular-charts';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IgxTabsModule,
    IgxDataChartCoreModule,
    IgxNumericXAxisModule,
    IgxNumericYAxisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
