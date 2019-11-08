import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginationComponent } from './components/logination/logination.component';
import { HouseInfoComponent } from './components/house-info/house-info.component';
import { HouseComponent } from './components/house create/house.component';
import { CurrencyPipePipe } from './currency-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginationComponent,
    HouseInfoComponent,
    HouseComponent,
    CurrencyPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
