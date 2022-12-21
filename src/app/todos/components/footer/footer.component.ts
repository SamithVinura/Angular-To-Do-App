import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TodosService } from '../../services/todos.service';
import { FilterEnum } from '../../types/filter.enum';
import { TodoInterface } from '../../types/todo.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  noFooterClass$!: Observable<boolean>;
  activeCount$!: Observable<number>;
  itemsLeftText$!: Observable<String>;
  filterEnum = FilterEnum;
  filter$!: Observable<FilterEnum>;
  constructor(private todosService: TodosService) {
    this.activeCount$ = this.todosService.todos$.pipe(
      map((todos) => todos.filter((todo) => !todo.isCompleted).length)
    );
    this.noFooterClass$ = this.todosService.todos$.pipe(
      map((todos) => todos.length === 0)
    );

    this.itemsLeftText$ = this.activeCount$.pipe(
      map((activeCount) => `item${activeCount !== 1 ? 's' : ''} left`)
    );

    this.filter$ = this.todosService.filter$;
  }
  ngOnInit(): void {}

  changeFilter(event: Event, filterName: FilterEnum): void {
    event.preventDefault();
    this.todosService.changeFilter(filterName);
  }
}
