import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Choice, choice} from './app.schemas'
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  url = 'http://localhost:4200'
  constructor(private http: HttpClient) { }

  getAllChoices(){
    const path = '/api/activity/choice'
    return this.http.get<unknown[]>(this.url+path).pipe( map(response=>{
      return response.map(value=>choice.parse(value))
    }))
  }

  createChoice(body: Choice){
    const path = '/api/activity/choice';
    return this.http.post<{message:string}>(path, body);
  }
}
