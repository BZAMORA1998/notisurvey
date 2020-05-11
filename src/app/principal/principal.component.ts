import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  @Input() nombrePadre:String;

  public usuario:Usuario;
  public nombre:String;
  constructor() {
    this.usuario=JSON.parse(localStorage.getItem("usuario"));
    this.nombre="Nombre de la encuesta que estas realizando..";
  }

  ngOnInit(): void {
    console.log(this.usuario);
  }

  nombreValideacion():boolean{
    if(this.nombrePadre!=""){
      return true;
    }else{
      return false;
    }
  }

  refresh():void{
    setTimeout(()=>{
      window.location.reload();
    }, 100);
  }
}
