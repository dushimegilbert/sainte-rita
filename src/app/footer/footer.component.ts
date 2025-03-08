import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `<footer>© 2025 My Angular App</footer>`,
  styles: [
    `footer { padding: 10px; background: #222; color: white; text-align: center; position: fixed; bottom: 0; width: 100%; }`
  ]
})
export class FooterComponent {}
