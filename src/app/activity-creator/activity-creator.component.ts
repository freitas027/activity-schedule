import { Component, Signal, signal } from '@angular/core';
import { ActivityService } from '../activity.service';
import { Choice } from '../app.schemas';
import { toSignal } from "@angular/core/rxjs-interop"
import { ChoiceComponent } from '../choice/choice.component';
@Component({
  selector: 'app-activity-creator',
  standalone: true,
  imports: [ChoiceComponent],
  templateUrl: './activity-creator.component.html',
  styleUrl: './activity-creator.component.css',
  providers: [ActivityService]
})
export class ActivityCreatorComponent {

  selectedChoiceRow = 0;
  availableChoices: Signal<Choice[] | undefined>
  addedChoices = signal<Choice[]>([]);
  constructor(private activityService: ActivityService) { 
    this.availableChoices = toSignal(this.activityService.getAllChoices())
  }

  addChoice(event: Event){
    const selectedChoice = this.availableChoices()?.[this.selectedChoiceRow];
    if(selectedChoice){
      this.addedChoices.update(array => {
        array.push(selectedChoice)
        return array;
      })
    }
  }

}
