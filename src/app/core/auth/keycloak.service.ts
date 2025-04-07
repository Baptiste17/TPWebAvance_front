import { Injectable } from '@angular/core';
import { KeycloakEventType, KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private keycloak: KeycloakService) {}

  async init(): Promise<void> {
    try {
      await this.keycloak.init({
        config: {
          url: 'http://localhost:8082/', // URL du serveur Keycloak
          realm: 'my-realm', // Nom du Realm
          clientId: 'my-angular-app', // ID du Client dans Keycloak
        },
        initOptions: {
          onLoad: 'login-required', // ou 'check-sso' pour éviter la redirection automatique
          checkLoginIframe: false,
        },
        bearerExcludedUrls: ['/assets', '/public'], // URLs non protégées
      });

      // Écouter les événements Keycloak
      this.keycloak.keycloakEvents$.subscribe((event) => {
        if (event.type === KeycloakEventType.OnAuthSuccess) {
          console.log('Authentification réussie !');
        }
      });
    } catch (error) {
      console.error('Erreur lors de l’init Keycloak', error);
    }
  }

  logout(): void {
    this.keycloak.logout();
  }

  getUserRoles(): string[] {
    return this.keycloak.getUserRoles();
  }

  getUsername(): string | null {
    return this.keycloak.getUsername();
  }
}
