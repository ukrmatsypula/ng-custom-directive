import {
  Directive,
  effect,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDirective {
  userType = input.required<Permission>({ alias: 'appAuth' });
  private authService = inject(AuthService);
  private templateRef = inject(TemplateRef);
  private ViewContainerRef = inject(ViewContainerRef);

  constructor() {
    console.log(TemplateRef);
    console.log(ViewContainerRef);

    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        this.ViewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.ViewContainerRef.clear();
      }
    });
  }
}
