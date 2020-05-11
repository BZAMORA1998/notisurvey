import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-diseno-encuesta',
  templateUrl: './diseno-encuesta.component.html',
  styleUrls: ['./diseno-encuesta.component.css']
})
export class DisenoEncuestaComponent implements OnInit {

  public nombre:String;

  constructor() {
    this.nombre="";
   }

  ngOnInit(): void {
    
  }

}

