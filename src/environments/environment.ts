import { KeycloakConfig } from 'keycloak-js';

// Add here your keycloak setup infos
let keycloakConfig: KeycloakConfig = {
  url: 'http://intra.dchanges.com:8000/auth',
  realm: 'Durocolor',
  clientId: 'ordersystem'
};



export const environment = {
  production: false,
  keycloakConfig
};