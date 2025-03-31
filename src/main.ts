import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { KeycloakService } from './app/services/keycloak.service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './app/token.interceptor';

const keycloak = new KeycloakService();

keycloak.init().then(() => {
  bootstrapApplication(AppComponent, {
    ...appConfig,
    providers: [
      ...(appConfig.providers || []),
      { provide: KeycloakService, useValue: keycloak },
      provideHttpClient(withInterceptors([tokenInterceptor])),
    ],
  });
}).catch((err) => console.error('Keycloak init failed', err));
