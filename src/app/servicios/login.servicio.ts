import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService{
    public url:String;
    
    constructor(private _http:HttpClient){
        this.url="http://vmi244822.contaboserver.net:8080/notisurvey-war/resources";
    }
    
    getAutenticacion(user,password):Observable<any>{
        return this._http.get(this.url+`/seguridades/login?nick=${user}&password=${password}`);
    }

}
