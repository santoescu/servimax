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
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import { MenuComponent } from './menu/menu.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { InventarioComponent } from './inventario/inventario.component'
import {APP_ROUTING} from './app.routes';
import {InventarioService, UserMaster} from './app.service';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './usuarios/registrar/registrar.component';
import { ListaComponent } from './usuarios/lista/lista.component';
import { DataService } from './dataservice/data.service';
import { LoginGuard } from './login.guard';
import { NoLoginGuard } from './no-login.guard';
import { ClientesComponent } from './clientes/clientes.component';
import { MatBadgeModule } from '@angular/material/badge';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CompraComponent } from './herramientas/compra/compra.component';
import { VentaComponent } from './herramientas/venta/venta.component';
import { EmpenoComponent } from './herramientas/empeno/empeno.component';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { MailComponent } from './mail/mail.component';
import { AddClienteComponent } from './clientes/add-cliente/add-cliente.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import { TrabajadoresComponent } from './trabajadores/trabajadores.component';
import { AddTrabajadorComponent } from './trabajadores/add-trabajador/add-trabajador.component';
import { HistorialComponent } from './historial/historial.component';




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
    CompraComponent,
    VentaComponent,
    EmpenoComponent,
    MailComponent,
    AddClienteComponent,
    TrabajadoresComponent,
    AddTrabajadorComponent,
    HistorialComponent,

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
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    BrowserModule,
    HttpClientModule,

    FormsModule,
  ],
  providers: [
    InventarioService, LoginGuard, NoLoginGuard, DataService, UserMaster
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
