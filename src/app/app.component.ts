import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScriptFormComponent } from "./script-form/script-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScriptFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'script-runner';
}
