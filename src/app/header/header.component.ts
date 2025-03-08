import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a routerLink="/">Home</a> |
      <a routerLink="/about">About</a>
    </nav>
  `,
  styles: [
    `nav { padding: 10px; background: #333; color: white; text-align: center; }`,
    `a { color: white; text-decoration: none; margin: 0 10px; }`
  ]
})
export class HeaderComponent {}
