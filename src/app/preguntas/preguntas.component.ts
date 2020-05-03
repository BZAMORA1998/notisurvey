import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit(): void {
    
  }

  refresh(): void {
    window.location.reload();
  }

}
