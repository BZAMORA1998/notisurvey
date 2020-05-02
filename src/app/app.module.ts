import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routing, appRoutingProviders} from './app.routing';
import { OlvideContrasenaComponent } from './olvide-contrasena/olvide-contrasena.component';
import { PrincipalComponent } from './principal/principal.component';
import { PreguntasComponent } from './preguntas/preguntas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OlvideContrasenaComponent,
    PrincipalComponent,
    PreguntasComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
