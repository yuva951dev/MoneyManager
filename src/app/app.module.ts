import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF, HashLocationStrategy, Location, LocationStrategy} from '@angular/common';

import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { CheckBoxAllModule, RadioButtonAllModule } from '@syncfusion/ej2-angular-buttons';
import { ChartAllModule, AccumulationChartAllModule } from '@syncfusion/ej2-angular-charts';
import { MultiSelectAllModule, DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { DialogAllModule, TooltipAllModule } from '@syncfusion/ej2-angular-popups';
import { DateRangePickerModule, DateRangePickerAllModule, DatePickerAllModule, TimePickerAllModule } from '@syncfusion/ej2-angular-calendars';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpenseComponent } from './expense/expense.component';
import { MenuComponent } from './menu/menu.component';
export const firebaseConfig = environment.firebaseConfig;


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DashboardComponent,
    ExpenseComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    GridModule,
        PagerModule,
        BrowserModule,
        ChartAllModule,
        DialogAllModule,
        CheckBoxAllModule,
        DatePickerAllModule,
        TimePickerAllModule,
        MultiSelectAllModule,
        RadioButtonAllModule,
        DateRangePickerModule,
        DropDownListAllModule,
        NumericTextBoxAllModule,
        DateRangePickerAllModule,
        AccumulationChartAllModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue : '/' },
  {provide: LocationStrategy, useClass: HashLocationStrategy}
],
  bootstrap: [AppComponent]
})
export class AppModule {
  private location: Location;
    constructor(location: Location) {
        this.location = location;
    }
 }
