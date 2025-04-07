import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {ThemeToggleComponent} from '../theme-manager/theme-manager.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    NgIf,
    ThemeToggleComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
