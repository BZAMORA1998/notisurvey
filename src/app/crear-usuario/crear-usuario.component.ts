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

  refresh(): void {
    window.location.reload();
  }

  pregunta1Siguiente(){
    var pregunta1=document.getElementById('form-pregunta1');
    var pregunta2=document.getElementById('form-pregunta2');
    pregunta1.style.display="none";
    pregunta2.style.display="block";
    console.log(this.crearUsuario);
  }

  pregunta2Anterior(){
    var pregunta1=document.getElementById('form-pregunta1');
    var pregunta2=document.getElementById('form-pregunta2');
    pregunta1.style.display="block";
    pregunta2.style.display="none";
  }

  pregunta2Siguiente(){
    var pregunta2=document.getElementById('form-pregunta2');
    var pregunta3=document.getElementById('form-pregunta3');
    pregunta2.style.display="none";
    pregunta3.style.display="block";
    console.log(this.crearUsuario);
  }

  pregunta3Anterior(){
    var pregunta2=document.getElementById('form-pregunta2');
    var pregunta3=document.getElementById('form-pregunta3');
    pregunta2.style.display="block";
    pregunta3.style.display="none";
  }

  pregunta3Siguiente(){
    var pregunta3=document.getElementById('form-pregunta3');
    var pregunta4=document.getElementById('form-pregunta4');
    pregunta3.style.display="none";
    pregunta4.style.display="block";
    console.log(this.crearUsuario);
  }

  pregunta4Anterior(){
    var pregunta3=document.getElementById('form-pregunta3');
    var pregunta4=document.getElementById('form-pregunta4');
    pregunta3.style.display="block";
    pregunta4.style.display="none";
  }

  pregunta4Siguiente(){
    var pregunta4=document.getElementById('form-pregunta4');
    var pregunta5=document.getElementById('form-pregunta5');
    pregunta4.style.display="none";
    pregunta5.style.display="block";
  }

  pregunta5Anterior(){
    var pregunta4=document.getElementById('form-pregunta4');
    var pregunta5=document.getElementById('form-pregunta5');
    pregunta4.style.display="block";
    pregunta5.style.display="none";
  }

  pregunta5Siguiente(){
    var pregunta5=document.getElementById('form-pregunta5');
    var pregunta6=document.getElementById('form-pregunta6');
    pregunta5.style.display="none";
    pregunta6.style.display="block";
    console.log(this.crearUsuario);
  }

  pregunta6Anterior(){
    var pregunta5=document.getElementById('form-pregunta5');
    var pregunta6=document.getElementById('form-pregunta6');
    pregunta5.style.display="block";
    pregunta6.style.display="none";
  }

  pregunta6Siguiente(){
    var pregunta6=document.getElementById('form-pregunta6');
    var pregunta7=document.getElementById('form-pregunta7');
    pregunta6.style.display="none";
    pregunta7.style.display="block";
    console.log(this.crearUsuario);
  }

}
