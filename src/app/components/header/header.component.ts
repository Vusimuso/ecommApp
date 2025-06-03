import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <div class="bg-slate-100 px-4 py-3 shadow-md">
      {{ title() }}
    </div>
  `,
  styles: ``
})
export class HeaderComponent {
  title = signal('Angular Ecommerce App');
}
