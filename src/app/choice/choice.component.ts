import { Component, effect, input, model, output, signal, Signal} from '@angular/core';
import {Choice} from "../app.schemas"
import { ActivityService } from '../activity.service';
import {toSignal, takeUntilDestroyed } from "@angular/core/rxjs-interop"
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-choice',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './choice.component.html',
  styleUrl: './choice.component.css',
  providers: [ActivityService]
})
export class ChoiceComponent {

  // choice = signal<Choice[] | undefined>(undefined);
  //choice: Signal<Choice[] | undefined>;
  
  choice = input<Choice>();
  value = model<string>();
  keyEvent = output<KeyboardEvent>()
  constructor (private activityService: ActivityService){
    //this.choice = toSignal(this.activityService.getAllChoices())
    //effect(()=> {this._choice.set(this.choice())}, {allowSignalWrites: true})
  }

  ngOnInit(){
  }

  
}
