import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgIf} from '@angular/common';
import {ApiService} from '../../services/api.service';
import {ThemeToggleComponent} from '../theme-manager/theme-manager.component';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,
    NgIf,
    ThemeToggleComponent,
  ],
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  apiState: boolean = false;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.checkApiState();
    setInterval(() => this.checkApiState(), 1000);
  }

  checkApiState(): void {
    this.api.checkPing().then(state => this.apiState = state);
  }
}
