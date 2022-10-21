import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from './app.routes';
import { UnivalleComponent } from './components/univalle/univalle.component';
import { UnicaucaComponent } from './components/unicauca/unicauca.component';
import { FupComponent } from './components/fup/fup.component';
import { CondicionalComponent } from './components/condicional/condicional.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    UnivalleComponent,
    UnicaucaComponent,
    FupComponent,
    CondicionalComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
