import { Routes } from '@angular/router';
import { ChoiceComponent } from './choice/choice.component';
import { ActivityComponent } from './activity/activity.component';
import { ChoiceCreatorComponent } from './choice-creator/choice-creator.component';
import { ActivityCreatorComponent } from './activity-creator/activity-creator.component';

export const routes: Routes = [
    {path: "choices", component: ActivityComponent},
    {path: "create-choice", component: ChoiceCreatorComponent},
    {path: "create-activity", component: ActivityCreatorComponent}
];
