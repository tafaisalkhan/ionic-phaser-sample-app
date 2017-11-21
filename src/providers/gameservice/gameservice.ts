import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AngularFireDatabase } from 'angularfire2/database';
import {  FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';

/*
  Generated class for the GameserviceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GameserviceProvider {

  constructor(public http: Http, public afd: AngularFireDatabase) {
    console.log('Hello GameserviceProvider Provider');
  }

  helloWorld(){
    console.log("hello world call");
    return this.http.get("assets/json/kid-math.json")
    
          .map((res:Response) => res.json())
        
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  getQuestionListafd() {
    
    return this.afd.list('/kids_math/').valueChanges();;
  
    }
   

}
