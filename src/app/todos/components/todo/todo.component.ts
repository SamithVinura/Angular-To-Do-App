import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input('todo') todoprops!:TodoInterface
  @Input('isEditing') isEditingProps!:boolean
  @Output('isEditingId') setEditingIdEvent :EventEmitter<string|null> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  setTodoinEditMode():void{
    this.setEditingIdEvent.emit(this.todoprops.id)
  }
}
