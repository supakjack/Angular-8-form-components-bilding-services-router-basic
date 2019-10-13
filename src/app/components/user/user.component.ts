import { Component, OnInit } from '@angular/core';
import { TodoService } from "../../services/todo.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  private name:string
  private age:number
  private email:string
  private isEditable:boolean

  // dictionary
  private address:{
    street:string,
    city:string,
    province:string,
    postcode:string
  }


  private todoList:Todo[]

  // array
  private skills:string[]
  constructor(private todoService:TodoService) { 
  }

  ngOnInit() {
    this.name = "Supak Pukdam"
    this.age = 20
    this.email = "60160027@gmail.com"
    this.address={
      street:"1112 Bangsaeng",
      city:"Burapha",
      province:"BUU",
      postcode:"1150"
    }
    this.skills = ["Programming","Iser","Coding"]

    // call services
    this.todoService.getTodoList().subscribe((response)=>{
      this.todoList = response
      // response.forEach((element,index) => {
      //       this.todoList[index].id = element.id
      //       this.todoList[index].title = element.title
      //       this.todoList[index].userId = element.userId
      //       this.todoList[index].completed = element.completed
      // });
      console.log(response)
    })
  }

  addSkill(skill){
    this.skills.unshift(skill)
    return false
  }

  removeSkill(skill){
    this.skills.forEach((element , index) => {
      if(element==skill){
        this.skills.splice(index,1)
      }
    });
  }

  toggleEdit(){
    this.isEditable =! this.isEditable
  }

}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
