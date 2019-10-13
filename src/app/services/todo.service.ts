import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) {
   }

   test(){
     return "Hello service"
   }

   getTodoList(){
     return this.http.get<any[]>("https://jsonplaceholder.typicode.com/todos")
   }
}
