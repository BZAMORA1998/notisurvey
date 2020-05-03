import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders} from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
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
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
