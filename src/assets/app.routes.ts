import { from } from "rxjs";
import{Routes, RouterModule} from'@angular/router';
import{NgModule} from '@angular/core';
import{InicioComponent} from '../app/componentes/inicio/inicio/inicio.component';
import{AboutComponent} from '../app/componentes/About/about/about.component';
import{ContactoComponent} from '../app/componentes/Contacto/contacto/contacto.component';
import{GaleriaComponent} from '../app/componentes/Galeria/galeria/galeria.component';
import{PageNotFoundComponent} from '../app/componentes/pageNotFound/page-not-found/page-not-found.component';

const routes: Routes=[
    {path:'Inicio', component:InicioComponent},
    {path: 'About', component:AboutComponent},
    {path: 'Contacto', component:ContactoComponent},
    {path: 'Galeria', component:GaleriaComponent},
    {path: '**', component: PageNotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true, relativeLinkResolution: 'legacy'}),],
    exports: [RouterModule]

})

export class AppToutingModule{}