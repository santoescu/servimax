import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';

//Componentes
import { MenuComponent } from './menu/menu.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { InventarioComponent } from './inventario/inventario.component'

//Rutas
import {APP_ROUTING} from './app.routes';

//servicio
import {InventarioService} from './app.service';
import { LoginComponent } from './login/login.component';
import { FilterPipe } from './pipes/filter.pipe';

//guards
import { LoginGuard } from './login.guard';
import { NoLoginGuard } from './no-login.guard';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavigationComponent,
    CalculadoraComponent,
    InventarioComponent,
    LoginComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [
    InventarioService, LoginGuard, NoLoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
