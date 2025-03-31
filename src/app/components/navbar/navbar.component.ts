import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgIf} from '@angular/common';
import {ApiService} from '../../services/api.service';
import {ThemeToggleComponent} from '../theme-manager/theme-manager.component';
import { KeycloakService } from '../../services/keycloak.service';

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

  username: string = '';

  apiState: boolean = false;

  constructor(private api: ApiService, private keycloakService: KeycloakService) {}


  ngOnInit(): void {
    this.checkApiState();
    setInterval(() => this.checkApiState(), 1000);

    const tokenParsed = this.keycloakService.keycloak.tokenParsed;
    this.username = tokenParsed?.['preferred_username'] || 'Utilisateur';
  }


  checkApiState(): void {
    this.api.checkPing().then(state => this.apiState = state);
  }

  logout() {
    this.keycloakService.logout();
  }
}
