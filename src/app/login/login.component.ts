import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { LoginService } from '../servicios/login.servicio';
import { Usuario } from '../models/login/usuario';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {

   public usuario:Usuario;
   public user:String;
   public password:String;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _loginService:LoginService,
  ) { 
    this.usuario=new Usuario("","","","","");
  }

  ngOnInit(): void {
    
  }

  redidirigirPrincipal(){
    return this._router.navigate(['/principal']);
  }

  autenticacion(){
    console.log("usuario: "+this.user+"contrasena: "+this.password);
    this._loginService.getAutenticacion(this.user,this.password).subscribe(
      result=>{
        if(result.respuestaProceso.codigo==0){
          this.usuario=result.usuario;
          localStorage.clear();
          localStorage.setItem("usuario",JSON.stringify(this.usuario));
          console.log(this.usuario);
          this.redidirigirPrincipal()
        }else{
          console.log(result.respuestaProceso);
        }
      },
      error=>{
        console.log(<any>error());
      }
    );
  }
}
