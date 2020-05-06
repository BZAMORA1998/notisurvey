import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { LoginService } from '../servicios/login.servicio';
import { Usuario } from '../models/login/usuario';
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

  refresh():void{
    setTimeout(()=>{
      window.location.reload();
    }, 100);
  }

  showModal(message){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message,
      confirmButtonColor:'#ea792d',
    })
  }

  mostrarModal(){
    var modal=document.getElementById("modelo");
    modal.style.display="block";
  }

  ocultarModal(){
    var modal=document.getElementById("modelo");
    modal.style.display="none";
  }

  autenticacion(){
    this.mostrarModal();
    this._loginService.getAutenticacion(this.nick,this.password).subscribe(
      Response=>{
        if(Response.respuestaProceso.codigo==200){
          this.usuario=Response.usuario;
          localStorage.clear();
          localStorage.setItem("usuario",JSON.stringify(this.usuario));
          console.log(this.usuario);
          this.ocultarModal();
          this.redidirigirPrincipal()
        }else{
          console.log(Response.respuestaProceso);
          this.ocultarModal();
          this.showModal(Response.respuestaProceso.mensaje);
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }
}
