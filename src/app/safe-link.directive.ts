import { Directive, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  queryParam = input('myapp');

  constructor() {
    console.log('SafeLinkDirective is active!');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = confirm('Do you want to leave app?');

    if (wantsToLeave) {
      const address = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href += '?from=' + this.queryParam();
      return;
    }

    event.preventDefault();
  }
}
