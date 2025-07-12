import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-window',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent {
  // Placeholder for navigation
  selectedPage = 'about';

  selectPage(page: string) {
    this.selectedPage = page;
  }
}
