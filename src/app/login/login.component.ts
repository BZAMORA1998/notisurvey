import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { LoginService } from '../servicios/login.servicio';
import { Usuario } from '../models/login/usuario';
import { from, ArgumentOutOfRangeError } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {

   public usuario:Usuario;
   public nick:String;
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

  showModal(message){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message,
      confirmButtonColor:'#ea792d',
    })
  }

  autenticacion(){
    this._loginService.getAutenticacion(this.nick,this.password).subscribe(
      Response=>{
        if(Response.respuestaProceso.codigo==200){
          this.usuario=Response.usuario;
          localStorage.clear();
          localStorage.setItem("usuario",JSON.stringify(this.usuario));
          console.log(this.usuario);
          this.redidirigirPrincipal()
        }else{
          console.log(Response.respuestaProceso);
          this.showModal(Response.respuestaProceso.mensaje);
        }
      },
      error=>{
        console.log(<any>error());
      }
    );
  }
}
