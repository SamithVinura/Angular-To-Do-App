import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  text:string=''

  constructor(private todosService:TodosService) {
    this.todosService.todos$.subscribe((todos)=>{
      console.log('todos',todos)
    })
   }

  ngOnInit(): void {
  }

  changeText(event:Event){
    const target = event.target as HTMLInputElement
    this.text = target.value
  }

  addTodo():void{
    console.log('todo',this.text)
    this.todosService.addTodo(this.text)
    this.text=''
  }
}
