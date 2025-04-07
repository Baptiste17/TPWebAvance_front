import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeManagerService } from '../../services/theme-manager.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-manager.component.html',
})
export class ThemeToggleComponent {
  isDarkMode = false;

  constructor(private themeService: ThemeManagerService) {
    this.themeService.isDarkMode$.subscribe((isDark) => {
      this.isDarkMode = isDark;
    });
  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }
}
