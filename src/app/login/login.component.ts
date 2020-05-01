import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _route:ActivatedRoute,
    private _router:Router
  ) { 
    
  }

  ngOnInit(): void {

  }

  redidirigirPrincipal(){
    return this._router.navigate(['/principal']);
  }
}
