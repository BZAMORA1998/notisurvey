import { Component, OnInit } from '@angular/core';
import { CrearUsuario } from '../models/crearUsuario';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  public crearUsuario:CrearUsuario;
  constructor() { 
    this.crearUsuario=new CrearUsuario("","","","","","");
  }

  ngOnInit(): void {
  }
}
