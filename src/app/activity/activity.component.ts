import { Component, signal } from '@angular/core';
import { Choice } from '../app.schemas';
import { ActivityService } from '../activity.service';
import { ChoiceComponent } from "../choice/choice.component";

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [ChoiceComponent],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.css',
  providers: [ActivityService]
})
export class ActivityComponent {

  choices = signal<Choice[] | undefined> (undefined);

  constructor(private activityService: ActivityService){}
  
  ngOnInit(){
    this.activityService.getAllChoices().subscribe( value => {
      this.choices.set(value);
    });
  }

  dragStart(event: DragEvent){
    event.dataTransfer?.setData("text/plain", (event.target as HTMLElement).id);
  }

  onDrop(event: DragEvent, endIndex: number){
    event.preventDefault();
    const startIndex = Number(event.dataTransfer?.getData("text/plain"));
    this.choices.update( choiceArray => {
      if(choiceArray){
        const temp = choiceArray.slice();
        choiceArray[startIndex] = temp[endIndex];
        choiceArray[endIndex] = temp[startIndex];
      }
      return choiceArray
    })
  }
  onDropOver(event: DragEvent){
    event.preventDefault();
    if (event.dataTransfer){
      event.dataTransfer.dropEffect = "move";
    }

  }
}
