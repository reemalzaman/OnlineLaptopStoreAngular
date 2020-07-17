import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JSONPlaceholderService {

  constructor(private http:HttpClient) { }

  getDate():Observable<any>{
    const url = "https://jsonplaceholder.typicode.com/photos"
    return this.http.get<any>(url)
  }
}
