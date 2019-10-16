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
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule  } from '@covalent/core/steps'
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { SharedModule } from './shared/shared.module';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

//Componentes
import { MenuComponent } from './menu/menu.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { InventarioComponent } from './inventario/inventario.component'

//Rutas
import {APP_ROUTING} from './app.routes';

//servicio
import {InventarioService, UserMaster} from './app.service';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './usuarios/registrar/registrar.component';
import { ListaComponent } from './usuarios/lista/lista.component';
import { DataService } from './dataservice/data.service';


//guards
import { LoginGuard } from './login.guard';
import { NoLoginGuard } from './no-login.guard';
import { ClientesComponent } from './clientes/clientes.component';

import { MatBadgeModule } from '@angular/material/badge';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RegistrocvComponent } from './registrocv/registrocv.component';
import { CompraComponent } from './herramientas/compra/compra.component';
import { VentaComponent } from './herramientas/venta/venta.component';
import { EmpenoComponent } from './herramientas/empeno/empeno.component';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavigationComponent,
    CalculadoraComponent,
    InventarioComponent,
    LoginComponent,
    RegistrarComponent,
    ListaComponent,
    ClientesComponent,
    RegistrocvComponent,
    CompraComponent,
    VentaComponent,
    EmpenoComponent
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
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule, 
    BrowserAnimationsModule,   
    BrowserModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    // (optional) Additional Covalent Modules imports
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    SharedModule,
    //NoopAnimationsModule, no borren esto por si necesita
    MatBadgeModule,
    MatDividerModule,
    MatTooltipModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTabsModule,
    MatAutocompleteModule,

    FormsModule
  ],
  providers: [
    InventarioService, LoginGuard, NoLoginGuard, DataService, UserMaster
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
