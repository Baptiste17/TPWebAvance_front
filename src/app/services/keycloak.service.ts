import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';

@Injectable({
  providedIn: 'root',
})
export class KeycloakService {
  keycloak: Keycloak;

  constructor() {
    this.keycloak = new Keycloak({
      url: 'http://localhost:8082',
      realm: 'AppOnduleur',
      clientId: 'AngularApp',
    });
  }

  init(): Promise<boolean> {
    return this.keycloak
      .init({
        onLoad: 'login-required',
        checkLoginIframe: false,
      })
      .then((authenticated) => {
        console.log('[Keycloak] Authenticated', authenticated);
        return authenticated;
      })
      .catch((error) => {
        console.error('[Keycloak] Auth init failed', error);
        return false;
      });
  }

  getToken(): string | undefined {
    return this.keycloak.token;
  }

  logout(): void {
    this.keycloak.logout();
  }
}
