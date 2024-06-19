import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input()
  todo?: Todo; // per richiamare un input abbiamo le []

  @Output()
  onRichiestaCompletamento = new EventEmitter<number>(); // creazione dell'allarme    // per richiamare un input abbiamo le ()

  richiediCompletamento() {
    this.onRichiestaCompletamento.emit(this.todo!.id); // attivazione dell'allarme   //il punto interrogativo viene messo quando quel dato in un certo momento diventa undefined, cosi lo segnala e non da errore
    // si puo mettere anche ! e significa, in qu el momento sono sicuro che il dato ce e zittisco typescript
  }
}
