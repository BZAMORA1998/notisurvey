import { Component, OnInit } from '@angular/core';
import { CrearUsuario } from '../models/crearUsuario';
import {Router, ActivatedRoute} from '@angular/router';
import { CrearUsuarioService } from '../servicios/crearUsuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css'],
  providers:[CrearUsuarioService]
})
export class CrearUsuarioComponent implements OnInit {
  public crearUsuario:CrearUsuario;
  public contrasenaright:String;
  public contrasenaleft:String;
  constructor( private _route:ActivatedRoute,
               private _router:Router,
               private _crearUsuarioService:CrearUsuarioService
    ) { 
    this.crearUsuario=new CrearUsuario("","","","","","");
    this.contrasenaright="";
    this.contrasenaleft="";
  }

  ngOnInit(): void {
  }

  contrasenaigual():boolean{
    if(this.contrasenaright!=this.contrasenaleft){
      return false;
    }else{
      this.crearUsuario.password=this.contrasenaright;
      return true;
    }
  }

  redirigirLogin(){
      setTimeout(()=>{
        window.location.reload();
      }, 100);
      return this._router.navigate(['/login']);
  }

  showModal(message){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message,
      confirmButtonColor:'#ea792d',
    });
  }


  mostrarModalEspera(){
    var modal=document.getElementById("modelo");
    modal.style.display="block";
  }

  ocultarModalEspera(){
    var modal=document.getElementById("modelo");
    modal.style.display="none";
  }

  mostrarModalConfirmacion(message){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: message,
      confirmButtonColor:'#ea792d',
      showConfirmButton: true,
    }).then((result) => {
      if (result.value) {
        this.redirigirLogin();
      }
     });
  }

  crearusuario(){
    this.mostrarModalEspera();
    this._crearUsuarioService.postCrearUsuario(this.crearUsuario).subscribe(
      Response=>{
        console.log(Response);
        if(Response.codigo==200){
          this.ocultarModalEspera();
          this.mostrarModalConfirmacion(Response.mensaje);
        }else{
          this.ocultarModalEspera();
          this.showModal(Response.mensaje);
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }
}
