import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { KeycloakService } from './services/keycloak.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const keycloak = inject(KeycloakService);
  const token = keycloak.getToken();

  const cloned = token
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;

  return next(cloned);
};
