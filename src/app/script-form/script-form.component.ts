import { Component, input} from '@angular/core';
import {Choice, schedule} from "../app.schemas";
import { ChoiceComponent } from "../choice/choice.component";
@Component({
  selector: 'app-script-form',
  standalone: true,
  imports: [ChoiceComponent],
  templateUrl: './script-form.component.html',
  styleUrl: './script-form.component.css'
})
export class ScriptFormComponent {

  choice = input<Choice>();

  constructor(){
  }
}
