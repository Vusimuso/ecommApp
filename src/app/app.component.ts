import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { single } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  template: `
    <app-header />

    <!-- <router-outlet /> -->
  `,
  styles: [],
})
export class AppComponent {
  // title = 'angular-ecomm';
  
}