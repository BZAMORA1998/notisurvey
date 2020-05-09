import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public usuario:Usuario;
  constructor() {
    this.usuario=JSON.parse(localStorage.getItem("usuario"));
  }

  ngOnInit(): void {
    console.log(this.usuario);
  }

  refresh():void{
    setTimeout(()=>{
      window.location.reload();
    }, 100);
  }
}
