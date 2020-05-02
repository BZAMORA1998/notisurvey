import { ModuleWithProviders } from '@angular/core';
import { Routes , RouterModule} from  '@angular/router';

//importar comppnente
import {LoginComponent} from './login/login.component';
import {OlvideContrasenaComponent} from './olvide-contrasena/olvide-contrasena.component';
import {PrincipalComponent} from './principal/principal.component';
import {PreguntasComponent} from './preguntas/preguntas.component';
import { Route } from '@angular/compiler/src/core';

//Path de los componentes
const appRoutes:Routes=[
    { path: '',component:LoginComponent},
    { path: 'login',component:LoginComponent},
    { path: 'olvide-contrasena',component:OlvideContrasenaComponent},
    { path: 'principal',component:PrincipalComponent},
    { path: 'preguntas',component:PreguntasComponent},
    { path: '**',component:LoginComponent}
];

export const appRoutingProviders: any[]=[];

export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);



