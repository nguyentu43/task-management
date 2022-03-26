// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth0Domain: 'dev-cvhtj2te.us.auth0.com',
  auth0ClientId: '1qRRc2pfjWxzlqHSqNybZ5dZsciUt9xQ',
  auth0Audience: 'task-management-api',
  auth0RedirectUri: 'http://localhost:4200',
  endpointApi: 'http://limitless-reaches-35266.herokuapp.com',
  wsEndpoint: 'ws://localhost:8001'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
