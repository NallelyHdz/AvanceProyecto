import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppToutingModule } from 'src/assets/app.routes';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar/navbar.component';
import { InicioComponent } from './componentes/inicio/inicio/inicio.component';
import { PageNotFoundComponent } from './componentes/pageNotFound/page-not-found/page-not-found.component';
import { AboutComponent } from './componentes/About/about/about.component';
import { ContactoComponent } from './componentes/Contacto/contacto/contacto.component';
import { GaleriaComponent } from './componentes/Galeria/galeria/galeria.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    PageNotFoundComponent,
    AboutComponent,
    ContactoComponent,
    GaleriaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppToutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
