import { Component, signal } from '@angular/core';
import { ChoiceComponent } from '../choice/choice.component';
import { Choice, choiceTypes } from '../app.schemas';
import { ActivityService } from '../activity.service';
import { ActivityComponent } from "../activity/activity.component";

@Component({
  selector: 'app-choice-creator',
  standalone: true,
  imports: [ChoiceComponent, ActivityComponent],
  templateUrl: './choice-creator.component.html',
  styleUrl: './choice-creator.component.css'
})
export class ChoiceCreatorComponent {

  selectedChoiceType = '';
  name = signal<string>('');
  prompt = signal<string>('');
  typeChoice:Choice = {prompt: "Type", type: "enum", options: choiceTypes};
  optionChoice: Choice = {prompt: "Options", type: "string"};
  optionsToCreate = signal<string[]>([]);

  constructor(private activityService: ActivityService){}
  onOptionKey(event: KeyboardEvent){
    if (event.key === "Enter"){
      const element = (event.target as HTMLInputElement)
      if (element.value === ''){
        return;
      }
      this.optionsToCreate.update( values => {
        values.push(element.value)
        return values;
      })
      element.value = ''
    }
  }

  clearForm(){
    this.name.set('');
    this.prompt.set('');
    this.optionsToCreate.set([]);
    this.selectedChoiceType = '';
  }
  create(){
    let body: Choice  = {
      name: this.name(),
      type: this.selectedChoiceType as typeof choiceTypes[number],
      prompt: this.prompt()
    }
    if(this.selectedChoiceType === 'enum'){
      body = {...body, options: this.optionsToCreate()}
    }
    console.log(body);
    this.activityService.createChoice(body).subscribe(value => {
      this.clearForm();
    });
  }
}
