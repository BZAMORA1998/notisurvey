import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders} from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { MatStepperModule } from '@angular/material/stepper';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OlvideContrasenaComponent } from './olvide-contrasena/olvide-contrasena.component';
import { PrincipalComponent } from './principal/principal.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { DisenoEncuestaComponent } from './diseno-encuesta/diseno-encuesta.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SeccionesComponent } from './secciones/secciones.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OlvideContrasenaComponent,
    PrincipalComponent,
    PreguntasComponent,
    DisenoEncuestaComponent,
    SeccionesComponent,
    CrearUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatStepperModule,
    routing,
    NoopAnimationsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
