import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeManagerService {
  private isDarkModeSubject = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.isDarkModeSubject.asObservable(); // Observable pour suivre les changements

  constructor() {
    this.initializeTheme();
  }

  toggleDarkMode() {
    const isDark = !this.isDarkModeSubject.value;
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    this.isDarkModeSubject.next(isDark); // Mettre à jour l'état
  }

  private initializeTheme() {
    const savedTheme = localStorage.getItem('theme') === 'dark';
    document.documentElement.classList.toggle('dark', savedTheme);
    this.isDarkModeSubject.next(savedTheme);
  }
}
