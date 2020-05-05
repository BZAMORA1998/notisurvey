import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService{
    public url:String;
    
    constructor(private _http:HttpClient){
        this.url="http://vmi244822.contaboserver.net:8080/";
    }
    
    getAutenticacion(nick,password):Observable<any>{
        let body = new HttpParams()
            .set('nick', nick)
            .set('password', password);

        let headers=new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded');
            
      return this._http.post( this.url+'notisurvey-war/resources/seguridades/login',body.toString(),{headers:headers}
      );
    } 
}
