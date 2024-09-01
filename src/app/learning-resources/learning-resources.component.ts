import { Component } from '@angular/core';
import { SafeLinkDirective } from '../safe-link.directive';

@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.component.html',
  styleUrl: './learning-resources.component.css',
  standalone: true,
  imports: [SafeLinkDirective],
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class LearningResourcesComponent {
  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = confirm('Do you want to leave app?');

    if (wantsToLeave) {
      return;
    }

    event.preventDefault();
  }
}
