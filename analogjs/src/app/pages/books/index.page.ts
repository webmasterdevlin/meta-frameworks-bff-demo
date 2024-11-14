import { injectLoad } from '@analogjs/router';
import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { load } from './index.server';
import { CommonModule, TitleCasePipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [TitleCasePipe, CommonModule],
  template: `
    <div>
      <h1>Welcome to Books Page!</h1>
      <ul>
        <li *ngFor="let book of data()">
          {{ book.title | titlecase }}
        </li>
      </ul>
    </div>
  `,
})
export default class BooksPageComponent {
  data = toSignal(injectLoad<typeof load>(), { requireSync: true });
}
